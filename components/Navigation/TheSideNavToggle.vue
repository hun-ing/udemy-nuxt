<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="bodyClickEvent">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script setup lang="ts">
let emits = defineEmits(['toggle']);
const bodyClickEvent = () => emits('toggle');
</script>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: white;
}
</style>
