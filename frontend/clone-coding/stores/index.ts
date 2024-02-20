export const useCreateStore = defineStore('createStore', {
    state: () => ({
        loadedPosts: [] as Post[],
        token: null,
    }),
    actions: {
        setPosts(posts: Post[]) {
            this.loadedPosts = posts;
        },
        async addPost(post: Post) {
            const runtimeConfig = useRuntimeConfig();
            const {data} = await useFetch(`${runtimeConfig.public.apiBase}/api/post`, {
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
            const runtimeConfig = useRuntimeConfig();
            const {data, error} = await useFetch(`${runtimeConfig.public.apiBase}/api/post`, {
                method: 'PUT',
                body: JSON.stringify({...editedPost.value, updatedDate: new Date()})
            })

            if (!error.value) {
                const postIndex = this.loadedPosts.findIndex(post => post.id === editedPost.value.id);
                this.loadedPosts[postIndex] = editedPost.value;
            } else {
                alert('오류 발생');
            }
        },
        async authenticationUser(authData) {
            const runtimeConfig = useRuntimeConfig();
            let authUrl = `${runtimeConfig.public.apiBase}/api/auth/verify`;
            let resToken = null;

            if (!authData.isLogin) {
                authUrl = `${runtimeConfig.public.apiBase}/api/auth/sign-up`;
            }

            const {data} = await useFetch(authUrl, {
                method: 'POST',
                headers: {
                    Authorization: 'test'
                },
                body: {
                    email: authData.email,
                    password: authData.password
                },
                onResponse({ request, response, options }) {
                    // Process the response data
                    resToken = response.headers.get('Authorization');
                    localStorage.setItem("token", resToken);
                    localStorage.setItem("tokenExpiration", (Date.now() + 3600000));
                    useCookie(
                        'jwt',
                        {
                            default: () => ({
                                token: resToken,
                                expirationDate: (Date.now() + 3600000),
                            }),
                            watch: false,
                        }
                    )
                },
                onResponseError({ request, response, options }) {
                    // Handle the response errors
                }
            })

            console.log('data = ', data.value);

            this.token = resToken;
        },
        clearToken() {
            console.log('start clearToken...')
            if (process.client) {
                localStorage.removeItem("token");
                localStorage.removeItem("tokenExpiration");
            }
            const cookie = useCookie('jwt');
            cookie.value = null;
            this.token = null;
        },
        initAuth(req = null) {
            let token = null;
            let expirationDate = null;
            const cookie = useCookie('jwt');

            if (cookie.value) {
                token = cookie.value.token;
                expirationDate = cookie.value.expirationDate;
            } else if (process.client) {
                token = localStorage.getItem('token');
                expirationDate = localStorage.getItem('tokenExpiration');
                expirationDate = Number(expirationDate);
            } else {
                return console.log('클라이언트에서 실행되지 않음');
            }

            if (!token || Date.now() > expirationDate) {
                this.logout();
                return console.log('토큰이 없거나 만료됨');
            }

            this.token = token;
        },
        logout() {
            this.clearToken();
        }
    },
    getters: {
        getLoadedPosts(state) {
            return state.loadedPosts;
        },
        isAuthenticated(state) {
            return state.token != null;
        }
    }
})