<template>
  <section class="post-list">
    <PostPreview
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://wikis.krsocsci.org/images/4/4a/%ED%96%84%EC%8A%A4%ED%84%B0.jpg"
        title="Hello there!1"
        previewText="첫 번째"
    />
    <PostPreview
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://wikis.krsocsci.org/images/4/4a/%ED%96%84%EC%8A%A4%ED%84%B0.jpg"
        title="Hello there!2"
        previewText="두 번째"
    />
    <PostPreview
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://wikis.krsocsci.org/images/4/4a/%ED%96%84%EC%8A%A4%ED%84%B0.jpg"
        title="Hello there!3"
        previewText="세 번째"
    />
  </section>
</template>

<script setup lang="ts">
import PostPreview from "~/components/Posts/PostPreview.vue";

defineProps({
  isAdmin: {
    type: Boolean,
    default: false
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