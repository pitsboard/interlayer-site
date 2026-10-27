# InterLayer site

A small static site built with [Astro](https://astro.build) and plain CSS.

- `/` — InterLayer product page
- `/company` — OPERON DESIGN LAB company page

## Run

```sh
npm install
npm run dev      # local preview
npm run build    # static files in dist/
```

## Edit

- **Copy, links, company details:** `src/site.config.mjs` (all text is temporary).
- **Download button:** in `src/site.config.mjs`, set `download.status` to `"available"` and `download.url` to the file. While it is `"coming-soon"` the buttons show *Coming Soon*.
- **Images and videos:** put files in `public/media/` and set each `media.src` in `src/site.config.mjs`. Empty `src` shows a grey placeholder.
- **App icon:** `public/icon.png` (set in `src/site.config.mjs` → `product.icon`).
- **Styles:** `src/styles/global.css`.

## Deploy

- Hosting: GitHub Pages (`pitsboard/interlayer-site`), custom domain `operondesign.com`.
- Every push to `main` runs `.github/workflows/deploy.yml` (the same setup as the PitsBoard site):
  `withastro/action@v3` (Node 22, `npm ci` from `package-lock.json`, `astro build`) → `actions/deploy-pages@v4`.
- It can also be run by hand from the repository's Actions tab (`workflow_dispatch`).
- Repository settings: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
  Custom domain is set in Settings → Pages (no CNAME file is needed with Actions deployment).
