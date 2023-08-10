import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    asserts: "/<rootDir>/assets"
  },
  css: [
    "~/assets/main.scss"
  ],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
  // devtools: { enabled: true }
  
})
