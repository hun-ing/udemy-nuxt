interface Post {
    [key: string]: any;
}

export const useCreateStore = defineStore('createStore', {
    state: () => ({
        loadedPosts: [] as Post[]
    }),
    actions: {
        setPosts(posts: Post[]) {
            this.loadedPosts = posts;
        },
        async addPost(post: Post) {
            const {data} = await useFetch('http://localhost:8080/api/post', {
                method: 'POST',
                body: JSON.stringify({...post.value, updatedDate: new Date()})
            })

            if(data.value) {
                this.loadedPosts.push(data.value);
            } else {
                alert('오류 발생');
            }
        },
        async editPost(editedPost: Post) {
            const {data, error} = await useFetch('http://localhost:8080/api/post', {
                method: 'PUT',
                body: JSON.stringify({...editedPost.value, updatedDate: new Date()})
            })

            if (!error.value) {
                const postIndex = this.loadedPosts.findIndex(post => post.id === editedPost.value.id);
                this.loadedPosts[postIndex] = editedPost.value;
            } else {
                alert('오류 발생');
            }
        }
    },
    getters: {
        getLoadedPosts(state) {
            return state.loadedPosts;
        }
    }
})