// https://nuxt.com/docs/api/configuration/nuxt-config
const { SEARCH_API_DOMAIN } = process.env

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  runtimeConfig: {
    apiDomain: SEARCH_API_DOMAIN,
  },
  nitro: {
    preset: 'node-server',
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})
