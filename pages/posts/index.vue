<template>
  <div class="posts-page">
    <PostsPostList :posts="loadedPosts"/>
  </div>
</template>

<script setup lang="ts">
const createStore = useCreateStore();
const loadedPosts = createStore.getLoadedPosts;
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>