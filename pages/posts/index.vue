<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script setup lang="ts">
import PostList from "~/components/Posts/PostList.vue";

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