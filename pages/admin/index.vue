<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="router.push('/admin/new-post')">글 생성</AppButton>
    </section>
    <section class="existing-posts">
      <h1>글 목록</h1>
      <PostList is-admin :posts="loadedPosts" />
    </section>
  </div>

</template>

<script setup lang="ts">
import PostList from "~/components/Posts/PostList.vue";
import AppButton from "~/components/UI/AppButton.vue";

const router = useRouter();
definePageMeta({
  layout: 'admin'
})

const createStore = useCreateStore();
const loadedPosts = createStore.getLoadedPosts;
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>