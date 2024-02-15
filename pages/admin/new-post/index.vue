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

const onSubmitted = async (postData) => {
  console.log('postData = ', postData);
  const {data} = await useFetch('http://localhost:8080/api/post', {
    method: 'POST',
    body: postData
  })

  console.log('data = ', data.value);
}
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