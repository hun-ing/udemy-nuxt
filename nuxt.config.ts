const pkg = require('./package')
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        head: {
            title: pkg.name,
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: pkg.description}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans"}
            ]
        }
    },
    css: [
        '~/assets/styles/main.css'
    ],
})
