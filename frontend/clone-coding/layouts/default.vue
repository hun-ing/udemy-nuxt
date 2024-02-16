<template>
  <div>
<!--    <Header />-->
<!--    <h1>기본 레이아웃</h1>-->
    <NavigationTheHeader @sidenav-toggle="headerToggleEvent" />
    <NavigationTheSidenav
      :show="displaySidenav"
      @close="closeEvent"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
const displaySidenav = ref(false);
const headerToggleEvent = (): void => {
  displaySidenav.value = !displaySidenav.value;
};
const closeEvent = (): void => {
  displaySidenav.value = false;
};
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>