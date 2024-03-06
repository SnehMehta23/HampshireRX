// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        faq: resolve(__dirname, "faq/faq.html"),
        privacy: resolve(__dirname, "privacy/privacy.html"),
        about: resolve(__dirname, "about/about.html"),
      },
    },
  },
});
