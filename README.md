# Chirag Sahoo — Personal Portfolio

Premium static portfolio website for **Chirag Sahoo**, Tech Lead and hands-on Senior Backend Engineer specializing in .NET, microservices, FinTech, and enterprise applications.

Built as a lightweight, production-ready React + TypeScript site—deployable for free on Vercel or GitHub Pages.

## Tech Stack

- React 19
- TypeScript
- Vite
- Modern CSS (no UI framework)
- Lucide React (icons)

No backend, authentication, or database.

## Local Setup

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Output is written to `dist/`.

## Customize Profile Data

Most content lives in a single data file so updates stay simple:

- `src/data/profile.ts` — name, contact placeholders, career, projects, tech stack, leadership, FinTech highlights
- Resume PDF: place at `public/assets/Chirag-Sahoo-Resume.pdf`
- Contact: set `email`, `phone`, `linkedin`, and `github` in `profile.contact`

## Project Structure

```
src/
  components/     # Navbar, Reveal, TechBackground, Button
  sections/       # Hero, Snapshot, About, Tech, Architecture, Career, …
  data/           # Structured profile content
  hooks/          # Scroll reveal, count-up
  styles/         # Global design tokens & base styles
  App.tsx
  main.tsx
public/
  assets/         # Resume PDF (add Chirag-Sahoo-Resume.pdf)
  favicon.svg
```

## Deployment — Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import the repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Deploy.

Optional: add a `vercel.json` only if you need custom redirects; the default Vite settings are enough for this SPA.

## Deployment — GitHub Pages

This repository is named for a **user/organization site** (`*.github.io`), which serves from the root path.

### Option A — GitHub Actions (recommended)

1. Ensure `vite.config.ts` uses `base: '/'` (already set for a `*.github.io` user site).
2. Create `.github/workflows/deploy.yml` (see below) or use the GitHub Pages UI with Actions.
3. Settings → Pages → Source: **GitHub Actions**.
4. Push to `main`; the workflow builds and publishes `dist`.

Example workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Option B — Manual / `gh-pages` branch

```bash
npm run build
# Publish the contents of dist/ to the branch GitHub Pages is configured to use
```

If you later host this as a **project site** (e.g. `username.github.io/repo-name/`), change Vite base:

```ts
// vite.config.ts
base: '/repo-name/'
```

## Accessibility & Performance

- Semantic HTML sections and landmarks
- Skip link and keyboard-focusable controls
- `prefers-reduced-motion` respected for animations
- Minimal dependencies for fast loads
- Relative asset paths suitable for static hosting

## License

Personal portfolio — all rights reserved by Chirag Sahoo.
