<template>
  <div>
<!--    <Header />-->
<!--    <h1>기본 레이아웃</h1>-->
    <TheHeader @sidenav-toggle="headerToggleEvent" />
    <TheSidenav
      :show="displaySidenav"
      @close="closeEvent"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "~/components/Navigation/TheHeader.vue";
import TheSidenav from "~/components/Navigation/TheSidenav.vue";

const displaySidenav = ref(false);
const headerToggleEvent = (): void => displaySidenav.value = !displaySidenav.value;
const closeEvent = (): void => displaySidenav.value = false;
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>