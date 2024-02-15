export default defineNuxtPlugin((nuxtApp) => {
    console.log('index plugin start');
    const createStore = useCreateStore();
    createStore.setPosts([
        {
            id: '1',
            title: '제목1',
            previewText: '미리보기1',
            thumbnail: 'https://wikis.krsocsci.org/images/4/4a/%ED%96%84%EC%8A%A4%ED%84%B0.jpg',
        },
        {
            id: '2',
            title: '제목2',
            previewText: '미리보기2',
            thumbnail: 'https://wikis.krsocsci.org/images/4/4a/%ED%96%84%EC%8A%A4%ED%84%B0.jpg',
        }
    ]);
})