# Somto Ikegbunam — Academic Portfolio

A modern academic portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Deployed on **Vercel** via **GitHub**.

## 🎨 Design

Colour palette derived from the abstract background image:

| Token | Hex | Role |
|---|---|---|
| Forest Dark | `#1E3320` | Hero backgrounds |
| Forest | `#2D4A2D` | Primary surface |
| Olive | `#5C7A3E` | Secondary accents |
| Cream Light | `#F5ECD7` | Page background |
| Cream | `#E8D5B0` | Section backgrounds |
| Amber | `#C8842A` | CTA, highlights |

Typography: **Cormorant Garamond** (display) · **DM Sans** (body) · **DM Mono** (labels/code)

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # CSS variables, fonts, animations
│   ├── layout.tsx           # Root layout (Navbar + Footer)
│   ├── page.tsx             # Homepage
│   ├── about/page.tsx       # About — bio, education, skills
│   ├── publications/page.tsx # Publications
│   ├── projects/page.tsx    # Projects
│   ├── experience/page.tsx  # Experience + certifications
│   └── contact/page.tsx     # Contact form
├── components/
│   ├── Navbar.tsx           # Sticky responsive navbar
│   ├── Footer.tsx           # Site footer
│   └── SectionReveal.tsx    # Scroll-triggered fade-in
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions → Vercel
├── vercel.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🌐 Deploying to Vercel via GitHub

### 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — academic portfolio"
git remote add origin https://github.com/YOUR_USERNAME/einstein-portfolio.git
git push -u origin main
```

### 2 — Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repository
3. Vercel auto-detects Next.js — click **Deploy**

That's it. Every push to `main` triggers a new production deploy automatically.

### 3 — (Optional) GitHub Actions CI

If you want the CI pipeline in `.github/workflows/deploy.yml`:

1. Install the [Vercel CLI](https://vercel.com/docs/cli): `npm i -g vercel`
2. Run `vercel link` in your project root to get your project and org IDs
3. Add these secrets in GitHub → Settings → Secrets:
   - `VERCEL_TOKEN` — from vercel.com/account/tokens
   - `VERCEL_ORG_ID` — from `.vercel/project.json` after `vercel link`
   - `VERCEL_PROJECT_ID` — from `.vercel/project.json`

---

## ✏️ Customisation Checklist

- [ ] Replace placeholder email in `components/Footer.tsx` and `app/contact/page.tsx`
- [ ] Add real LinkedIn, GitHub, Google Scholar URLs throughout
- [ ] Update publications in `app/publications/page.tsx` with real DOIs
- [ ] Add your profile photo to `public/` and reference in `app/about/page.tsx`
- [ ] Wire up the contact form — recommended: [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com)
- [ ] Update `app/layout.tsx` metadata with your real email/domain
- [ ] Add a custom domain in Vercel → Project → Settings → Domains

---

## 📬 Contact Form Integration (Formspree)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint URL
3. In `app/contact/page.tsx`, replace the `handleSubmit` function:

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) setSubmitted(true)
}
```

---

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router, SSR
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev/) — icons
- [Vercel](https://vercel.com/) — hosting
