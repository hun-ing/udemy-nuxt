export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        console.log('error1 = ', error);
        console.log('info1 = ', info);
        console.log('nuxtApp = ', nuxtApp);
     }

    // Also possible
    nuxtApp.hook('vue:error', (error, instance, info) => {
        console.log('error2 = ', error);
        console.log('info2 = ', info);
        console.log('nuxtApp = ', nuxtApp);
    })
})