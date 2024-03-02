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
  // TODO: fix shadow
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
