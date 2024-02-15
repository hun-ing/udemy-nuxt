export default defineNuxtPlugin(async (nuxtApp) => {
    console.log('index plugin start');

    const {data} = await useFetch('http://localhost:8080/api/post');

    console.log('data = ', data.value);

    const createStore = useCreateStore();
    createStore.setPosts(data);
})