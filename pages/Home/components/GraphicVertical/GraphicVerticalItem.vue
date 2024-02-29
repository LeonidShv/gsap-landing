<template>
  <div>
    <p>
      {{ rate }}
    </p>
    <div :style="{ height: height }"></div>
  </div>
</template>

<script setup>
defineProps({
  height: String,
  rate: String,
});
</script>

<style lang="scss" scoped>
p {
  color: red;
}
</style>
