// @ts-check
import { defineConfig } from "astro/config";

const isInterLayer =
  process.env.SITE_TARGET === "interlayer" ||
  (!process.env.SITE_TARGET && process.env.CF_PAGES === "1");

// A small static site: `npm run build` writes plain HTML / CSS to dist/.
// Deployed to GitHub Pages by .github/workflows/deploy.yml (push to main).
export default defineConfig({
  site: isInterLayer ? "https://inter-layer.app" : "https://operondesign.com",
});
