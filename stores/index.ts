export const useCreateStore = defineStore('createStore', {
    state: () => ({
        loadedPosts: []
    }),
    actions: {
        setPosts(posts) {
            this.loadedPosts = posts;
        }
    },
    getters: {
        getLoadedPosts(state) {
            return state.loadedPosts;
        }
    }
})