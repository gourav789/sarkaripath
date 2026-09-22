import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

function getVarInfo(val, isUrl = false) {
  if (!val) return "MISSING";
  if (isUrl) return String(val);
  return `${String(val).length} chars`;
}

export async function GET() {
  let cfEnv = {};
  let cfError = null;

  try {
    const ctx = await getCloudflareContext({ async: true });
    if (ctx && ctx.env) {
      cfEnv = ctx.env;
    }
  } catch (err) {
    try {
      const syncCtx = getCloudflareContext();
      if (syncCtx && syncCtx.env) {
        cfEnv = syncCtx.env;
      }
    } catch (syncErr) {
      cfError = syncErr?.message || String(syncErr);
    }
  }

  const result = {
    processEnv: {
      AUTH_GOOGLE_ID: getVarInfo(process.env.AUTH_GOOGLE_ID || process.env.GOOGLE_CLIENT_ID),
      AUTH_SECRET: getVarInfo(process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET),
      AUTH_URL: process.env.AUTH_URL || process.env.NEXTAUTH_URL || "MISSING",
      allKeys: Object.keys(process.env).filter(
        (k) =>
          k.includes("AUTH") ||
          k.includes("GOOGLE") ||
          k.includes("NEXT") ||
          k.includes("CF")
      ),
    },
    cfEnv: {
      AUTH_GOOGLE_ID: getVarInfo(cfEnv.AUTH_GOOGLE_ID || cfEnv.GOOGLE_CLIENT_ID),
      AUTH_SECRET: getVarInfo(cfEnv.AUTH_SECRET || cfEnv.NEXTAUTH_SECRET),
      AUTH_URL: cfEnv.AUTH_URL || cfEnv.NEXTAUTH_URL || "MISSING",
      allKeys: Object.keys(cfEnv),
      error: cfError,
    },
  };

  return Response.json(result);
}
