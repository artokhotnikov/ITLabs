/* eslint-disable quotes */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
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
            '(function(a,m,o,c,r,m){a[m]={id:"416934",hash:"cd6b40183e4314da3ccfb8af1ecec763b3682c33191e008828b503e7f0a5a0ef",locale:"ru",inline:true,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};var d=a.document,s=d.createElement("script");s.async=true;s.id=m+"_script";s.src="https://gso.amocrm.ru/js/button.js";d.head&&d.head.appendChild(s)}(window,0,"amoSocialButton",0,0,"amo_social_button"))'
        }
      ]
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
