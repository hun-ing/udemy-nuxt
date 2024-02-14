<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script setup lang="ts">
import PostList from "~/components/Posts/PostList.vue";
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>