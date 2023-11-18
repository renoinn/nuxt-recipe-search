// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  runtimeConfig: {
    public: {
      searchApiDomain: '',
    },
  },
  nitro: {
    preset: 'node-server',
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})
