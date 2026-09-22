import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getCloudflareContext } from "@opennextjs/cloudflare";

function getEnvConfig() {
  let cfEnv = {};
  try {
    const ctx = getCloudflareContext();
    if (ctx && ctx.env) {
      cfEnv = ctx.env;
    }
  } catch {
    // Outside Cloudflare request context (e.g. build time or standard node)
  }

  const secret =
    cfEnv.AUTH_SECRET ||
    cfEnv.NEXTAUTH_SECRET ||
    process.env.AUTH_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "sarkaripath-fallback-secret-minimum-32-chars-long";

  const clientId =
    cfEnv.AUTH_GOOGLE_ID ||
    cfEnv.GOOGLE_CLIENT_ID ||
    process.env.AUTH_GOOGLE_ID ||
    process.env.GOOGLE_CLIENT_ID ||
    "";

  const clientSecret =
    cfEnv.AUTH_GOOGLE_SECRET ||
    cfEnv.GOOGLE_CLIENT_SECRET ||
    process.env.AUTH_GOOGLE_SECRET ||
    process.env.GOOGLE_CLIENT_SECRET ||
    "";

  const authUrl =
    cfEnv.AUTH_URL ||
    cfEnv.NEXTAUTH_URL ||
    process.env.AUTH_URL ||
    process.env.NEXTAUTH_URL;

  // Mirror variables onto process.env for internal Auth.js utilities
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

  return {
    providers: [
      Google({
        clientId,
        clientSecret,
      }),
    ],
    secret,
    trustHost: true,
  };
}

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  return getEnvConfig();
});
