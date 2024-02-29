<template>
  <img 
    v-for="{src, alt} in slides"
    :src="src" :alt="alt"
  />
</template>

<script setup>
defineProps({
  slides: Array,
})
</script>

<style lang="scss" scoped>
  
</style>