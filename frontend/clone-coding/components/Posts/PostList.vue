<template>
  <section class="post-list">
    <PostPreview
        v-for="post of posts"
        :key="post.id"
        :id="post.id"
        :is-admin="isAdmin"
        :thumbnail="post.thumbnail"
        :title="post.title"
        :previewText="post.previewText"
    />
  </section>
</template>

<script setup lang="ts">
import PostPreview from "~/components/Posts/PostPreview.vue";

defineProps({
  isAdmin: {
    type: Boolean,
    default: false
  },
  posts: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>