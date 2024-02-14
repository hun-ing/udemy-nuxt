<template>
  <h1>유저 하위 정보 입니다. 아이디 = {{ userId }}</h1>
</template>

<script setup lang="ts">

const route = useRoute();
const userId = ref(route.params.id);

definePageMeta({
  validate: (data) => {
    console.log(data);
    return /^\d+$/.test(data.params.id)
  }
})
</script>