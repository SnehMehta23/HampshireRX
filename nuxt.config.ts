// nuxt.config.js
import { analyticsConfig } from "./config/analytics";
import { schemaConfig } from "./config/schema";
import { hotjarConfig } from "./config/hotjar";
import { metaConfig } from "./config/meta";
import { metaPixelConfig } from "./config/meta-pixel";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET, // Make sure this is set via env or directly here
  },
  //@ts-ignore
  // scripts: {
  //   registry: {
  //     googleTagManager: {
  //       id: "GTM-M5V8CDX2",
  //     },
  //   },
  // },
  app: {
    head: {
      title: metaConfig.title,
      link: metaConfig.link,
      meta: metaConfig.meta,
      script: [
        ...metaPixelConfig.script,
        ...analyticsConfig.script,
        ...schemaConfig.script,
        ...hotjarConfig.script,
      ],
      noscript: [...metaPixelConfig.noscript],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-mongoose",
    "./modules/auth.module",
    "@nuxt/scripts",
  ],
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: "models",
    devtools: true,
  },
});
