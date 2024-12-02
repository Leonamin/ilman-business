// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',

    build: {
        // transpile: ['ant-design-vue', 'lodash-es'],
    },

    devtools: {enabled: true},

    // vite: {
    //     resolve: {
    //         alias: {
    //             'lodash-es': 'lodash-es',
    //         },
    //     },
    // },

    css: [
        '@/assets/css/global.css',
        '@/assets/css/reset.css',
        '@/assets/css/variables.css',
        '@/assets/css/colors.css',
        '@/assets/css/button.css',
        '@/assets/css/styles.css',
        '@/assets/css/card.css',
        '@/assets/css/presets/badge.css',
        'ant-design-vue/dist/reset.css',
    ],

    plugins: [
        '@/plugins/Vue3Marquee.client.ts',
    ],

    modules: ['@ant-design-vue/nuxt'],
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
                },
            ],
        },
    },
})