<template>
  <NuxtLink :to="to" class="button__link">
    <slot name="left" />
    {{ label }}
    <slot name="right" />
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: String,
  to: String
})
</script>

<style lang="scss" scoped>
  .button__link {
    background: red;
    color: #fff;
  }
</style>