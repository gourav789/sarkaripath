import { getCloudflareContext } from "@opennextjs/cloudflare";

// Safe env var reader (works on Cloudflare Workers and Node.js)
function getEnvVar(name) {
  try {
    const cf = getCloudflareContext();
    if (cf?.env?.[name]) return cf.env[name];
  } catch {
    // Fallback if not inside Cloudflare request context
  }
  return process.env[name];
}

function getCredentials() {
  const projectId = getEnvVar("FIREBASE_PROJECT_ID");
  const clientEmail = getEnvVar("FIREBASE_CLIENT_EMAIL");
  let privateKey = getEnvVar("FIREBASE_PRIVATE_KEY");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Missing Firebase Admin credentials. Please set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY."
    );
  }

  if (typeof privateKey === "string" && privateKey.includes("\\n")) {
    privateKey = privateKey.replace(/\\n/g, "\n");
  }

  return { projectId, clientEmail, privateKey };
}

// Base64URL utilities
function base64url(input) {
  let bytes;
  if (typeof input === "string") {
    bytes = new TextEncoder().encode(input);
  } else if (input instanceof Uint8Array) {
    bytes = input;
  } else if (input instanceof ArrayBuffer) {
    bytes = new Uint8Array(input);
  } else {
    bytes = new Uint8Array(input);
  }
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64urlDecode(str) {
  let b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4) {
    b64 += "=";
  }
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// Convert PKCS#8 PEM to CryptoKey for signing RS256
async function importPrivateKey(pem) {
  const cleanKey = pem
    .replace(/-----BEGIN [A-Z ]+-----/g, "")
    .replace(/-----END [A-Z ]+-----/g, "")
    .replace(/[\r\n\s]/g, "");

  const binaryDerString = atob(cleanKey);
  const binaryDer = new Uint8Array(binaryDerString.length);
  for (let i = 0; i < binaryDerString.length; i++) {
    binaryDer[i] = binaryDerString.charCodeAt(i);
  }

  return await crypto.subtle.importKey(
    "pkcs8",
    binaryDer.buffer,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false,
    ["sign"]
  );
}

// OAuth2 Google Access Token cache
let cachedToken = null;
let tokenExpiresAt = 0;

async function getGoogleAccessToken(clientEmail, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && tokenExpiresAt > now + 60) {
    return cachedToken;
  }

  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const payload = {
    iss: clientEmail,
    sub: clientEmail,
    aud: "https://oauth2.googleapis.com/token",
    scope: "https://www.googleapis.com/auth/datastore",
    iat: now,
    exp: now + 3600,
  };

  const encodedHeader = base64url(JSON.stringify(header));
  const encodedPayload = base64url(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  const cryptoKey = await importPrivateKey(privateKey);
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(unsignedToken)
  );

  const jwt = `${unsignedToken}.${base64url(signature)}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }).toString(),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to get Google access token: ${res.status} ${errText}`);
  }

  const tokenData = await res.json();
  cachedToken = tokenData.access_token;
  tokenExpiresAt = now + (tokenData.expires_in || 3600);
  return cachedToken;
}

// Google JWKS cache for Firebase Auth ID Token verification
let cachedJwks = null;
let jwksExpiresAt = 0;

async function getGoogleJwks() {
  const now = Date.now();
  if (cachedJwks && jwksExpiresAt > now) {
    return cachedJwks;
  }

  const res = await fetch(
    "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch Google JWKS: ${res.status}`);
  }

  const data = await res.json();
  const cacheControl = res.headers.get("cache-control") || "";
  const match = cacheControl.match(/max-age=(\d+)/);
  const maxAge = match ? parseInt(match[1], 10) : 3600;
  cachedJwks = data.keys;
  jwksExpiresAt = now + maxAge * 1000;
  return cachedJwks;
}

// Verify Firebase ID Token using Web Crypto + Google JWKS
export async function verifyFirebaseIdToken(idToken, projectId) {
  if (!idToken || typeof idToken !== "string") {
    throw new Error("ID token must be a non-empty string");
  }

  const parts = idToken.split(".");
  if (parts.length !== 3) {
    throw new Error("Invalid JWT token format");
  }

  const [headerB64, payloadB64, signatureB64] = parts;
  let header, payload;
  try {
    header = JSON.parse(new TextDecoder().decode(base64urlDecode(headerB64)));
    payload = JSON.parse(new TextDecoder().decode(base64urlDecode(payloadB64)));
  } catch {
    throw new Error("Failed to parse JWT header or payload");
  }

  const now = Math.floor(Date.now() / 1000);

  if (payload.exp && payload.exp < now) {
    throw new Error("Firebase ID token has expired");
  }
  if (payload.iat && payload.iat > now + 300) {
    throw new Error("Firebase ID token issued in the future");
  }
  if (projectId) {
    if (payload.aud !== projectId) {
      throw new Error(
        `Firebase ID token has incorrect aud. Expected ${projectId}, got ${payload.aud}`
      );
    }
    if (payload.iss !== `https://securetoken.google.com/${projectId}`) {
      throw new Error(
        `Firebase ID token has incorrect iss. Expected https://securetoken.google.com/${projectId}, got ${payload.iss}`
      );
    }
  }
  if (!payload.sub || typeof payload.sub !== "string") {
    throw new Error("Firebase ID token has empty or invalid sub (uid)");
  }

  const jwks = await getGoogleJwks();
  const jwk = jwks.find((k) => k.kid === header.kid);
  if (!jwk) {
    throw new Error(`Public key not found for kid: ${header.kid}`);
  }

  const key = await crypto.subtle.importKey(
    "jwk",
    jwk,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false,
    ["verify"]
  );

  const isValid = await crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    key,
    base64urlDecode(signatureB64),
    new TextEncoder().encode(`${headerB64}.${payloadB64}`)
  );

  if (!isValid) {
    throw new Error("Firebase ID token signature verification failed");
  }

  return {
    uid: payload.sub,
    email: payload.email,
    name: payload.name,
    picture: payload.picture,
    ...payload,
  };
}

// Convert JS objects to Firestore REST JSON
function toFirestoreValue(val) {
  if (val === null || val === undefined) {
    return { nullValue: null };
  }
  if (typeof val === "boolean") {
    return { booleanValue: val };
  }
  if (typeof val === "number") {
    if (Number.isInteger(val)) {
      return { integerValue: val.toString() };
    }
    return { doubleValue: val };
  }
  if (typeof val === "string") {
    return { stringValue: val };
  }
  if (Array.isArray(val)) {
    return {
      arrayValue: {
        values: val.map(toFirestoreValue),
      },
    };
  }
  if (typeof val === "object") {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      if (v !== undefined) {
        fields[k] = toFirestoreValue(v);
      }
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

// Write/Merge document to Firestore via REST API
async function writeFirestoreDocument(
  projectId,
  clientEmail,
  privateKey,
  collection,
  docId,
  data,
  merge = true
) {
  const token = await getGoogleAccessToken(clientEmail, privateKey);
  const fields = {};
  const fieldPaths = [];

  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      fields[key] = toFirestoreValue(value);
      fieldPaths.push(`updateMask.fieldPaths=${encodeURIComponent(key)}`);
    }
  }

  const queryParams =
    merge && fieldPaths.length > 0 ? `?${fieldPaths.join("&")}` : "";
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}/${docId}${queryParams}`;

  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ fields }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Firestore REST error ${res.status}: ${err}`);
  }

  return await res.json();
}

// Firebase Admin SDK compatible exports
export function getAdminAuth() {
  const creds = getCredentials();
  return {
    verifyIdToken: async (token) => {
      return await verifyFirebaseIdToken(token, creds.projectId);
    },
  };
}

export function getAdminDb() {
  const creds = getCredentials();
  return {
    collection: (collName) => ({
      doc: (docId) => ({
        set: async (data, options = { merge: true }) => {
          return await writeFirestoreDocument(
            creds.projectId,
            creds.clientEmail,
            creds.privateKey,
            collName,
            docId,
            data,
            options?.merge ?? true
          );
        },
      }),
    }),
  };
}
