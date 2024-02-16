export default defineNuxtPlugin(async (nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();
    const {data} = await useFetch(`${runtimeConfig.public.apiBase}/api/post`);
    const createStore = useCreateStore();
    createStore.setPosts(data);
})