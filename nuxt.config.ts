// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    build: {
        transpile: ['ant-design-vue', 'lodash-es'],
    },
    devtools: {enabled: true},
    vite: {
        resolve: {
            alias: {
                'lodash-es': 'lodash-es',
            },
        },
    },
    css: [
        '@/assets/css/global.css',
        '@/assets/css/reset.css',
        '@/assets/css/variables.css',
        '@/assets/css/colors.css',
        '@/assets/css/button.css',
    ]
})
