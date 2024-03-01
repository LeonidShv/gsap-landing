<template>
  <NuxtLink :to="to" class="button d-flex justify-s-b">
    <slot name="left" />
    <span class="font-s-base c--red">{{ label }}</span>
    <slot name="right" />
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: String,
  to: String,
});
</script>

<style lang="scss" scoped>
.button {
  line-height: 51px;
  gap: 55px;
}
</style>
