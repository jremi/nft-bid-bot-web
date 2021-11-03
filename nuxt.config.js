export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NFTBot.bid',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Twitter auction tool designed for #NFTartists',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', name: 'og:title', content: 'NFT Bid Bot' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'NFTBot.bid' },
      { hid: 'og:url', name: 'og:url', content: 'https://nftbot.bid' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Twitter auction tool designed for #NFTartists',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://i.imgur.com/HFLdQll.gif',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    debug: {
      enabled: false,
    },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
    axios: {
      browserBaseURL: (() => {
        return process.env.NODE_ENV === 'production'
          ? 'https://nftbot.bid/'
          : null // default to e.g.: http://localhost:3000/
      })(),
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/currency', ssr: true }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    '@nuxtjs/moment',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: ['~/api/api.js'],

  fontawesome: {
    icons: {
      brands: ['faTwitter', 'faTwitterSquare'],
    },
  },
}
