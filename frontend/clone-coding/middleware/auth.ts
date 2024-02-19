export default defineNuxtRouteMiddleware((to, from) => {
    console.log('사용자 인증 미들웨어 실행...');
    const createStore = useCreateStore();
    console.log('createStore.isAuthenticated = ', createStore.isAuthenticated);
    if (!createStore.isAuthenticated) {
        return navigateTo('/admin/auth')
    }
})
