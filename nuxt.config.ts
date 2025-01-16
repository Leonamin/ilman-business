// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "아임파인 일만사업 솔루션",
      meta: [
        {
          key: "og:title",
          property: "og:title",
          content: "아임파인 일만사업 솔루션",
        },
        {
          key: "og:description",
          property: "og:description",
          content: "일차의료 만성질환관리의 정답, 아임파인 일만사업",
        },
        { key: "og:image", property: "og:image", content: "/og_image.png" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css",
        },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  build: {
    transpile: ["ant-design-vue"],
  },

  devtools: { enabled: true },

  // vite: {
  //     resolve: {
  //         alias: {
  //             'lodash-es': 'lodash-es',
  //         },
  //     },
  // },
  // modules: [
  //     '@ant-design-vue/nuxt',
  // ],
  css: [
    "@/assets/css/global.css",
    "@/assets/css/reset.css",
    "@/assets/css/variables.css",
    "@/assets/css/colors.css",
    "@/assets/css/button.css",
    "@/assets/css/styles.css",
    "@/assets/css/card.css",
    "@/assets/css/presets/badge.css",
  ],

  plugins: ["@/plugins/Vue3Marquee.client.ts"],

  modules: ["@nuxtjs/sitemap"],
  site: {
    url: "https://cdcare.imfinedr.com",
  },
  sitemap: {
    hostname: "https://cdcare.imfinedr.com",
    gzip: true,
    routes: [
      {
        url: "/",
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        url: "/explanation",
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        url: "/contact",
        changefreq: "weekly",
        priority: 0.5,
        lastmod: new Date().toISOString(),
      },
      {
        url: "/apply-form",
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    ],
  },
});
