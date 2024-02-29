<template>
  <div :style="{width: width}">
    <p>
      {{ label }}
    </p>
    <p>
      {{ rate }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  rate: String,
  width: String
})
</script>

<style lang="scss" scoped>
  
</style>