<template>
  <div>
    <input type="text" v-model="userId">
    <button @click="onLoadUser">Load User</button>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const userId = ref('');

function onLoadUser() {
  router.push({path: `/users/${userId.value}`})
}
</script>