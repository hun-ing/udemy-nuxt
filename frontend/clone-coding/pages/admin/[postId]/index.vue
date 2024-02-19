<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['check-auth', 'auth']
})

const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const {data, pending, error, refresh} = await useAsyncData(async () => $fetch(`${runtimeConfig.public.apiBase}/api/post/${route.params.postId}`));
const loadedPost = ref(data.value);

const createStore = useCreateStore();
const onSubmitted = (editedPost) => createStore.editPost(editedPost).then(() => router.push('/admin'));
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>