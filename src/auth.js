import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getCloudflareContext } from "@opennextjs/cloudflare";

async function getEnvConfig() {
  let cfEnv = {};

  // 1. Try async getCloudflareContext (recommended on Workers)
  try {
    const ctx = await getCloudflareContext({ async: true });
    if (ctx?.env) {
      cfEnv = { ...ctx.env };
    }
  } catch {
    // Fall back to sync or ALS below
  }

  // 2. Try sync getCloudflareContext
  if (!Object.keys(cfEnv).length) {
    try {
      const ctx = getCloudflareContext();
      if (ctx?.env) {
        cfEnv = { ...ctx.env };
      }
    } catch {
      // Ignored
    }
  }

  // 3. Try global AsyncLocalStorage context symbol
  if (!Object.keys(cfEnv).length) {
    try {
      const sym = Symbol.for("__cloudflare-context__");
      const store = globalThis[sym];
      if (store?.env) {
        cfEnv = { ...store.env };
      }
    } catch {
      // Ignored
    }
  }

  // Helper to pick the first non-empty string across cfEnv and process.env
  const pick = (...keys) => {
    for (const k of keys) {
      if (cfEnv[k] && typeof cfEnv[k] === "string" && cfEnv[k].trim()) {
        return cfEnv[k].trim();
      }
      if (
        process.env[k] &&
        typeof process.env[k] === "string" &&
        process.env[k].trim()
      ) {
        return process.env[k].trim();
      }
    }
    return "";
  };

  const secret =
    pick("AUTH_SECRET", "NEXTAUTH_SECRET") ||
    "sarkaripath-fallback-secret-minimum-32-chars-long";

  const clientId = pick(
    "AUTH_GOOGLE_ID",
    "GOOGLE_CLIENT_ID",
    "AUTH_GOOGLE_CLIENT_ID",
    "GOOGLE_ID"
  );

  const clientSecret = pick(
    "AUTH_GOOGLE_SECRET",
    "GOOGLE_CLIENT_SECRET",
    "AUTH_GOOGLE_CLIENT_SECRET",
    "GOOGLE_SECRET"
  );

  const authUrl = pick("AUTH_URL", "NEXTAUTH_URL");

  // Mirror variables onto process.env for internal NextAuth/Auth.js utilities
  if (secret) {
    process.env.AUTH_SECRET = secret;
  }
  if (clientId) {
    process.env.AUTH_GOOGLE_ID = clientId;
  }
  if (clientSecret) {
    process.env.AUTH_GOOGLE_SECRET = clientSecret;
  }
  if (authUrl) {
    process.env.AUTH_URL = authUrl.replace(/\/$/, "");
  }

  const googleOptions = {};
  if (clientId) googleOptions.clientId = clientId;
  if (clientSecret) googleOptions.clientSecret = clientSecret;

  return {
    providers: [Google(googleOptions)],
    secret,
    trustHost: true,
  };
}

export const { handlers, signIn, signOut, auth } = NextAuth(async () => {
  return await getEnvConfig();
});
