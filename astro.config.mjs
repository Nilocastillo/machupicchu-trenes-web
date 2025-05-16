// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static", // opcional pero recomendable para claridad
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  site: "https://trenesamachupicchu.com/",
});
