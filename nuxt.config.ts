import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  components: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'vuetify-nuxt-module',
  ],
  css: [
    'vuetify/lib/styles/main.sass', // Make sure Vuetify's styles are included
    '@mdi/font/css/materialdesignicons.min.css', // Optionally include Material Icons
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/vuetify.js'],
  build: {
    transpile: ['vuetify'],
  },

})