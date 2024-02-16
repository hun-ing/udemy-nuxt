<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

const router = useRouter();
const createStore = useCreateStore();
const onSubmitted = (postData) => createStore.addPost(postData).then(() => router.push('/admin'));
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>