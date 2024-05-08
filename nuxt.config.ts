// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config() // Load environment variables from .env file
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  ssr: false,
  runtimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
});
