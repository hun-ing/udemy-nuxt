const pkg = require('./package')
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@pinia/nuxt'],
    app: {
        baseURL: "/",
        head: {
            title: pkg.name,
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {key: 'description', name: 'description', content: pkg.description}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans"}
            ]
        },
        pageTransition: { name: 'fade', mode: 'out-in' }
    },
    css: [
        '~/assets/styles/main.css'
    ],
    plugins: [
    ],
    runtimeConfig: {
        public: {
            apiBase: process.env.BASE_URL || 'http://localhost:8080'
        }
    }
})
