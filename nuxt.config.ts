// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  alias: {
    assets: '/<rootDir>/assets',
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true
        }
      }
    }
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 420,
      sm: 440,
      md: 768,
      lg: 960,
      xl: 1260
    }
  }
})
