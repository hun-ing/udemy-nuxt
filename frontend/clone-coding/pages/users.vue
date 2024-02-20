<template>
  <div>
    <input type="text" v-model="userId">
    <button @click="onLoadUser">Load User</button>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const userId = ref('');

function onLoadUser() {
  navigateTo({path: `/users/${userId.value}`})
}
</script>