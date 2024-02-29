<template>
  <header>
    <div>
      <div>
        <p>Respect</p>
        <p>.Studio</p>
      </div>
      <p>Digital Marketing Agency</p>
    </div>

    <VSlider :slides="slides" />
  </header>
  <VNavigation style="background-color: yellow" />
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
