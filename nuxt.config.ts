/* eslint-disable quotes */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      meta: [
        { name: 'yandex-verification', content: 'd9b6cb0a1d4d42c9' },
        {
          name: 'zen-verification',
          content:
            'Xu4iw98LvynrHGRkZ265C8qXVYEQO76X52dOoo49xrhmKOJXNtbPS5tywLTybXH6'
        },
        {
          name: 'og:image',
          content: 'https://itlabs.top/img/og.png'
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'og:url',
          content: 'https://itlabs.top'
        },
        {
          name: 'og:title',
          content: 'ITLabs - разработка программного обеспечения'
        },
        {
          name: 'og:description',
          content: 'ITLabs - разработка программного обеспечения'
        }
      ],
      script: [
        {
          children:
            '(function(a, m, o, c, r, m) {\n' +
            '  a[m] = {\n' +
            "    id: '412792',\n" +
            "    hash: 'af583ea793de0d5db048702c5e221d6881865c504fc8689ee5624b4c24d47694',\n" +
            "    locale: 'ru',\n" +
            '    inline: false,\n' +
            '    setMeta: function(p) {\n' +
            '      this.params = (this.params || []).concat([p])\n' +
            '    }\n' +
            '  }\n' +
            '  a[o] = a[o] || function() {\n' +
            '    (a[o].q = a[o].q || []).push(arguments)\n' +
            '  }\n' +
            "  var d = a.document, s = d.createElement('script')\n" +
            '  s.async = true\n' +
            "  s.id = m + '_script'\n" +
            "  s.src = 'https://gso.amocrm.ru/js/button.js'\n" +
            '  d.head && d.head.appendChild(s)\n' +
            "}(window, 0, 'amoSocialButton', 0, 0, 'amo_social_button'))"
        }
      ]
      // script: [
      //   {
      //     src: 'https://gso.amocrm.ru/js/button.js',
      //     async: true,
      //     id: 'amo_social_button_script'
      //   }
      // ]
    }
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
      xs: 320,
      sm: 440,
      md: 768,
      lg: 960,
      xl: 1260
    },
    quality: 70,
    format: ['avif', 'webp'],
    domains: ['api.itlabs.top'],
    densities: [1, 2],
    provider: 'ipx'
  },
  yandexMaps: {
    apikey: '3c893c7f-a06c-4af0-906f-79e9f2815e28'
  },
  runtimeConfig: {
    public: {
      API: process.env.API,
      BASE_URL: process.env.BASE_URL
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  }
})
