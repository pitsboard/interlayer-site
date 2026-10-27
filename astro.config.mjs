// @ts-check
import { defineConfig } from "astro/config";

// A small static site: `npm run build` writes plain HTML / CSS to dist/.
// Deployed to GitHub Pages by .github/workflows/deploy.yml (push to main).
export default defineConfig({
  site: "https://operondesign.com",
});
