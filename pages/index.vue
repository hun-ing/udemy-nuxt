<template>
  <div class="home-page">
    <section class="intro">
      <h1>기술 정보</h1>
    </section>
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script setup lang="ts">
import PostList from "~/components/Posts/PostList.vue";

const loadedPosts = ref([])

useAsyncData(
    'posts',
    (context) => {
      console.log('context = ', context);
      setTimeout(() => {
        loadedPosts.value = [
          {
            id: '1',
            title: '제목1',
            previewText: '미리보기1',
            thumbnail: 'https://wikis.krsocsci.org/images/4/4a/%ED%96%84%EC%8A%A4%ED%84%B0.jpg',
          },
          {
            id: '2',
            title: '제목2',
            previewText: '미리보기2',
            thumbnail: 'https://wikis.krsocsci.org/images/4/4a/%ED%96%84%EC%8A%A4%ED%84%B0.jpg',
          }
        ]
      }, 500)
    }
)
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~/assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>