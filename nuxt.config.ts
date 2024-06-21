// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    'vue-yandex-maps/nuxt',
    '@vee-validate/nuxt',
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '97636091',
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        ecommerce: 'dataLayer'
      }
    ]
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
  },
  yandexMaps: {
    apikey: '3c893c7f-a06c-4af0-906f-79e9f2815e28'
  }
})
