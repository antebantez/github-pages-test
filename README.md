# github-pages-test

A small React + TypeScript landing page built with Vite.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages

The project is configured for the repository project URL:

`https://antebantez.github.io/github-pages-test/`

A push to `main` runs `.github/workflows/deploy.yml`, builds the Vite app, and deploys the `dist` folder using GitHub Pages. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The app uses hash-based routing so the `/contact` page also works when GitHub Pages serves a direct URL.
