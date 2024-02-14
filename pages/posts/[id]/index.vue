<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">제목</h1>
      <div class="post-details">
        <div class="post-detail">마지막 업데이트 날짜: xxx</div>
        <div class="post-detail">작성자: 이름</div>
      </div>
      <p class="post-content">내용</p>
    </section>
    <section class="post-feedback">
      <p>피드백 이메일: <a href="mailto:test@test.com">test@test.com</a>.</p>
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>