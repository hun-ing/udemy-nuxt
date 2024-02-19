export default defineNuxtRouteMiddleware((to, from) => {
    console.log('인증 체크 미들웨어 실행...');

    const createStore = useCreateStore();
    createStore.initAuth();
})
