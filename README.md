# SarkariPath — Govt Exam Prep Platform

Ek Next.js website jahan sabhi government exams (SSC CGL, Railways, IBPS, aur zyada) ka syllabus, pattern, notes aur mock tests hain. Free content + premium (paid) content. GitHub → Vercel pe deploy hoti hai, Google sign-in aur payment ready hai.

---

## Kya-kya hai isme

- **Homepage** — hero, popular exams, categories, features
- **All Exams** (`/exams`) — category filter ke saath
- **Exam detail** (`/exams/[slug]`) — pattern table + detailed syllabus (free topics visible, premium topics locked/blurred)
- **Premium** (`/premium`) — pricing plans + payment button
- **Sign In** (`/signin`) — Google sign-in button (NextAuth-ready)

---

## 1. Local pe chalana (apne computer par)

Node.js install hona chahiye (https://nodejs.org — LTS version).

```bash
npm install
npm run dev
```

Browser me kholo: `http://localhost:3000`

Build test karne ke liye:

```bash
npm run build
```

---

## 2. Naam ya domain badalna

Ek hi file me sab kuch hai: **`src/lib/site.js`**

```js
export const site = {
  name: "SarkariPath",          // yahan naam badlo
  domain: "sarkaripath.onl",     // yahan domain
  supportEmail: "support@sarkaripath.onl",
  paymentLink: "#",              // Razorpay payment link
  upiId: "yourname@okaxis",      // apni UPI ID
};
```

---

## 3. Naya exam add karna

`src/lib/exams.js` me `exams` array me ek naya object daalo (existing jaisa copy karo). Page apne aap ban jayega — koi code nahi likhna.

Detailed syllabus (free + premium topics) ke liye `src/lib/syllabus.js` me us slug ka entry add karo.

---

## 4. GitHub pe daalna

```bash
git init
git add .
git commit -m "Initial commit: SarkariPath"
```

GitHub pe ek naya repo banao (e.g. `sarkaripath`), phir:

```bash
git remote add origin https://github.com/<your-username>/sarkaripath.git
git branch -M main
git push -u origin main
```

---

## 5. Vercel pe deploy karna

1. https://vercel.com pe GitHub se sign in karo
2. "Add New" → "Project" → apna `sarkaripath` repo import karo
3. Framework: **Next.js** (Vercel khud detect kar lega)
4. "Deploy" dabao — 1-2 min me live!
5. Environment variables (agar Google login/payment chahiye) Vercel ke "Settings → Environment Variables" me daalo (`.env.example` dekho)

### Apna `.onl` domain jodna
1. Vercel project → "Settings" → "Domains"
2. `sarkaripath.onl` add karo
3. Vercel jo DNS records de, woh apne domain provider (jahan se `.onl` khareeda) me daal do
4. Kuch minute me domain live ho jayega (SSL automatic)

---

## 6. Google Sign-In activate karna

Poore steps yahan hain: **`src/lib/auth-setup.md`**

Chhota saar:
1. `npm install next-auth`
2. `src/app/api/auth/[...nextauth]/route.js` banao (code auth-setup.md me hai)
3. Google Cloud Console se Client ID + Secret banao
4. `GoogleSignInButton.js` me `signIn("google")` uncomment karo
5. Env variables Vercel me daalo

---

## 7. Payment activate karna

**Sabse aasaan (recommended): Razorpay Payment Link**
1. https://razorpay.com pe account banao (KYC karo)
2. Dashboard → "Payment Links" → naya link banao (amount ke saath)
3. Woh link `src/lib/site.js` me `paymentLink` me daal do
4. Bas! Buy button ab us link pe le jayega

**UPI (aur bhi simple, bina account):**
- `src/lib/site.js` me `upiId` daal do (jaise `yourname@okaxis`)
- Mobile pe buy button UPI app khol dega; payment ke baad user screenshot bhejega

**Razorpay Checkout (advanced, automatic unlock):**
- Iske liye backend API route chahiye. Baad me add kar sakte ho — abhi payment link kaafi hai.

---

## 8. Content (notes + mock) kaha hai

Business plan aur ready product material root folder me hai:
- `01_BUSINESS_PLAN.md` — poora business plan
- `PRODUCT/SYLLABUS_01_REASONING.md` — detailed reasoning syllabus
- `PRODUCT/02_SSC_CGL_2026_STUDY_NOTES.md` — study notes
- `PRODUCT/03_SSC_CGL_2026_FULL_MOCK_TEST.md` — 100-question mock + answer key

In PDFs ko Google Drive pe upload karke premium buyers ko link do.

---

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **NextAuth** (Google login — optional activation)
- Deploy: **Vercel**

---

## Zaroori: pehla kaam

1. `src/lib/site.js` me apna naam, domain, UPI/payment link daalo
2. `npm install && npm run build` chala kar test karo
3. GitHub → Vercel deploy karo
4. Domain jodo
5. Google login + payment activate karo (upar steps)
