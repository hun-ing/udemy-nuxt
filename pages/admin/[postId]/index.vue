<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

const route = useRoute();
const router = useRouter();

const {data, pending, error, refresh} = await useAsyncData(async () => $fetch(`http://localhost:8080/api/post/${route.params.postId}`));
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