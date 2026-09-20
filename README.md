# SarkariPath — Govt Exam Prep Platform

Ek Next.js website jahan sabhi government exams (SSC CGL, Railways, IBPS, aur zyada) ka syllabus, pattern, notes aur mock tests hain. Free content + premium (paid) content with **Razorpay payment**. GitHub se **Cloudflare Workers** pe deploy hoti hai (OpenNext adapter) — commercial use allowed, unlimited bandwidth.

---

## Kya-kya hai isme

- **Homepage** — hero, popular exams, categories, features, testimonials
- **All Exams** (`/exams`) — category filter ke saath
- **Exam detail** (`/exams/[slug]`) — pattern table + detailed syllabus (free topics visible, premium topics locked)
- **Premium** (`/premium`) — pricing plans + **Razorpay checkout**
- **Sign In** (`/signin`) — Google sign-in button (NextAuth-ready)
- **API routes** — `/api/create-order` aur `/api/verify-payment` (Razorpay, server-side signature verification)

---

## 1. Local pe chalana

Node.js chahiye (v20+). https://nodejs.org

```bash
npm install
npm run dev
```

Browser: `http://localhost:3000`

Payment test karne ke liye pehle `.env.local` banao (neeche step 6).

---

## 2. Naam ya domain badalna

Ek hi file: **`src/lib/site.js`**

```js
export const site = {
  name: "SarkariPath",          // naam
  domain: "sarkaripath.onl",     // domain
  supportEmail: "support@sarkaripath.onl",
  telegram: "https://t.me/your_channel",
};
```

---

## 3. Naya exam ya syllabus add karna

- Naya exam: `src/lib/exams.js` ke `exams` array me object daalo — page apne aap banega.
- Detailed syllabus: `src/lib/syllabus.js` me us slug ka entry daalo.
- Pricing: `src/lib/plans.js` me price/features badlo.

---

## 4. GitHub pe daalna

```bash
git add .
git commit -m "Add Razorpay + Cloudflare setup"
git push
```

(Pehli baar: `git remote add origin https://github.com/<username>/sarkaripath.git` phir `git push -u origin main`.)

---

## 5. Cloudflare Workers pe deploy karna

Ye site **OpenNext adapter** se Cloudflare Workers pe chalti hai (API routes + payment ke liye server chahiye, isliye static export nahi).

### Option A — Cloudflare dashboard se (GitHub connect, recommended)
1. https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Workers**
2. **Connect to Git** → apna `sarkaripath` repo chuno
3. Build command: `npm run deploy` set karega khud, ya use karo:
   - Build command: `npx opennextjs-cloudflare build`
   - Deploy command: `npx opennextjs-cloudflare deploy`
4. **Environment variables / Secrets** add karo (neeche step 6)
5. Deploy — ek `*.workers.dev` URL milega

### Option B — apne computer se (wrangler)
```bash
npm run deploy
```
(Pehli baar `npx wrangler login` chalega — Cloudflare account se login.)

### Local pe production-jaisa preview
```bash
npm run preview
```

---

## 6. Razorpay payment activate karna

1. https://razorpay.com pe account banao → KYC complete karo
2. Dashboard → **Settings → API Keys** → **Generate Key**
   - Test ke liye `rzp_test_...`, live ke liye `rzp_live_...`
3. **Local dev:** root me `.env.local` banao (`.env.example` copy karke):
   ```
   RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
   RAZORPAY_KEY_SECRET=your-secret
   ```
4. **Cloudflare pe (production):** keys ko **secrets** ki tarah daalo (kabhi git me commit mat karo):
   ```bash
   npx wrangler secret put RAZORPAY_KEY_ID
   npx wrangler secret put RAZORPAY_KEY_SECRET
   ```
   Ya dashboard se: Workers & Pages → project → **Settings → Variables and Secrets** → **Add** (type: Secret).

### Payment flow kaise kaam karta hai
- User "Buy" dabata hai → `/api/create-order` server pe Razorpay order banata hai (amount plans.js se, client se nahi — safe)
- Razorpay checkout khulta hai (UPI/card/netbanking)
- Payment ke baad `/api/verify-payment` **signature verify** karta hai (HMAC-SHA256) — tabhi success maana jaata hai
- Verify hone par access unlock (abhi success message; DB/KV se persistent unlock baad me add kar sakte ho)

> **Zaroori:** `RAZORPAY_KEY_SECRET` sirf server pe rehta hai, kabhi frontend/git me nahi. Isliye ye `NEXT_PUBLIC_` nahi hai.

---

## 7. Custom domain (`.onl`) jodna

1. Domain ko Cloudflare pe le aao (aasaan tarika): dash.cloudflare.com → **Add a site** → apna domain daalo → Cloudflare jo 2 nameservers de, woh apne domain registrar (jahan se `.onl` khareeda) me set kar do
2. Domain active hone ke baad: Workers & Pages → apna project → **Settings → Domains & Routes** → **Add** → **Custom domain** → `sarkaripath.onl`
3. SSL automatic lag jaata hai — kuch minute me live

---

## 8. Google Sign-In activate karna (optional)

Poore steps: **`src/lib/auth-setup.md`**. Chhota saar:
1. `npm install next-auth`
2. `src/app/api/auth/[...nextauth]/route.js` banao
3. Google Cloud Console se Client ID + Secret
4. `GoogleSignInButton.js` me `signIn("google")` uncomment
5. Env/secrets Cloudflare me daalo

---

## 9. Content (notes + mock) kaha hai

- `01_BUSINESS_PLAN.md` — poora business plan
- `PRODUCT/SYLLABUS_01_REASONING.md` — detailed reasoning syllabus

Premium buyers ko ye PDFs (Google Drive link) do.

---

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS**
- **Razorpay** (payment, API routes)
- **OpenNext + Cloudflare Workers** (hosting)
- **NextAuth** (Google login — optional)

---

## Pehla kaam (checklist)

1. `src/lib/site.js` me apna naam/domain daalo
2. Razorpay keys `.env.local` me daalo → `npm run dev` se payment test karo (test mode)
3. GitHub push → Cloudflare Workers deploy
4. Cloudflare pe secrets (Razorpay keys) daalo
5. Custom domain jodo
6. Razorpay live mode on karo (KYC ke baad)
