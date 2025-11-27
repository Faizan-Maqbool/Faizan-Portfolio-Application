# Deployment Guide for Vercel

This project is now a pure React frontend, so deploying to Vercel is straightforward.

## Prerequisites

1. Vercel account (sign up at [vercel.com](https://vercel.com))
2. Vercel CLI (optional, but handy): `npm i -g vercel`

## Step-by-Step

1. **Install dependencies locally**
   ```bash
   cd client
   npm install
   ```

2. **Build the project**
   ```bash
   npm run build
   ```
   This creates the production-ready files in `client/build`.

3. **Deploy with Vercel CLI (recommended)**
   ```bash
   vercel
   ```
   - Select the project scope/account
   - When asked for the root directory, choose the repository root
   - Vercel reads `vercel.json` and knows to build from `client/`

4. **Or deploy via Vercel Dashboard**
   - Click **New Project**
   - Import your Git repo
   - Set **Framework Preset** to “Create React App” (or “Other”)
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/build`

## Environment Variables

- None are required for this static build.

## After Deployment

1. Visit the Vercel-generated URL
2. Test key sections:
   - About / hero layout
   - Resume PDF preview
   - Portfolio filters
   - Blog section
   - Contact form (it should open your mail client)

## Troubleshooting

- **Build fails**: Ensure dependencies are installed inside `client`
- **Assets missing**: Confirm everything lives under `client/public/assets/`
- **Contact button does nothing**: Pop-up blockers can prevent `mailto:` links; try enabling pop-ups for the site

## Optional: Custom Domain

1. Go to **Settings → Domains** in Vercel
2. Add your domain
3. Follow the provided DNS instructions

## Need Help?

- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)

