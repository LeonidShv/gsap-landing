<template>
  <img class="slide" v-for="{ src, alt } in slides" :src="src" :alt="alt" />
</template>

<script setup>
defineProps({
  slides: Array,
});
</script>

<style lang="scss" scoped>
.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
