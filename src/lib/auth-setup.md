# Google Sign-In (NextAuth) ko activate kaise karein

Abhi Google button ek placeholder alert dikhata hai. Real login chalu karne ke liye ye 4 steps karo. (Build tab tak bina in steps ke bhi chalega — ye optional activation hai.)

## Step 1 — NextAuth install karo

```bash
npm install next-auth
```

## Step 2 — API route banao

File banao: `src/app/api/auth/[...nextauth]/route.js`

```js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
```

## Step 3 — SessionProvider add karo

`src/components/Providers.js` banao:

```js
"use client";
import { SessionProvider } from "next-auth/react";
export default function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
```

Phir `src/app/layout.js` me `<Providers>` se `{children}` ko wrap karo.

## Step 4 — Button me signIn uncomment karo

`src/components/GoogleSignInButton.js` me:
- Upar wali `import { signIn } from "next-auth/react";` line uncomment karo
- `handleClick` ke andar `signIn("google");` uncomment karo, aur `alert(...)` hata do

## Google credentials kaise banayein

1. https://console.cloud.google.com pe jao
2. New project banao
3. "APIs & Services" > "Credentials" > "Create Credentials" > "OAuth client ID"
4. Application type: **Web application**
5. Authorized redirect URIs me daalo:
   - `http://localhost:3000/api/auth/callback/google` (local ke liye)
   - `https://sarkaripath.onl/api/auth/callback/google` (live domain ke liye)
6. Client ID aur Client Secret copy karke `.env.local` aur Vercel me daalo
