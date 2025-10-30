# HydroPeptide Learning Lab — Minimal Landing Page

A one‑page Next.js app (App Router, TypeScript, CSS Modules). Perfect for editing offline once dependencies are installed.

## Quick start (do this **before** your flight)

1. Install Node.js 18+.
2. In a terminal, `cd` into this project folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

After you've run `npm install` once, you can work **offline** on a plane and keep using `npm run dev`.

## Files to tweak
- `app/page.tsx` — the single landing page with two buttons.
- `app/page.module.css` — modern, minimal styling via CSS Modules.
- If you prefer, you can add Tailwind later; this template uses simple CSS Modules to keep it lean for offline dev.

## Deploy to Vercel
1. Create a GitHub repo and push this project (optional but recommended).
2. Go to https://vercel.com/new and import your repo (or use the Vercel CLI with `npx vercel`).
3. Accept defaults and deploy.

## Use your domain: hydropeptidelearninglab.co.uk
1. In Vercel, open your **Project → Settings → Domains**.
2. Click **Add**, enter `hydropeptidelearninglab.co.uk` and follow the prompts.
3. Choose one of:
   - **Use Vercel DNS (nameservers):** Vercel shows you nameservers; change them at your registrar. (Simplest.)
   - **Keep registrar DNS (A/ALIAS + CNAME):** Point **apex** (`hydropeptidelearninglab.co.uk`) to Vercel with an A/ALIAS/ANAME record and **www** to the CNAME shown by Vercel.
4. Once DNS propagates, Vercel will issue HTTPS automatically.

## Is Vercel hosting free?
- Vercel’s **Hobby** plan is free for personal projects and includes generous limits. If you exceed limits or need team features, upgrade to **Pro**.

---
Made for quick offline hacking. ✈️
