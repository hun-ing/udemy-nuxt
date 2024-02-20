<template>
  <div class="admin-page">
    <section class="new-post">
      <UIAppButton @click="navigateTo('/admin/new-post')">글 생성</UIAppButton>
      <UIAppButton style="margin-left: 10px;" @click="onLogout">로그아웃</UIAppButton>
    </section>
    <section class="existing-posts">
      <h1>글 목록</h1>
      <PostsPostList is-admin :posts="loadedPosts" />
    </section>
  </div>

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['check-auth', 'auth']
})

const createStore = useCreateStore();
const loadedPosts = createStore.getLoadedPosts;

const onLogout = () => {
  createStore.logout();
  navigateTo('/admin/auth');
};
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