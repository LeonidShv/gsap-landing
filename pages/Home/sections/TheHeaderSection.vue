<template>
  <div class="header p-20">
    <div class="header__slider-wrapper">
      <VSlider :slides="slides" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slides = ref([
  {
    src: "/_nuxt/assets/images/header1.jpg",
    alt: "team for slide, first item",
  },
]);
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: calc(100vh - 87px);

  &__slider-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
