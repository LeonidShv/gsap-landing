<template>
  <NuxtLink
    :to="to"
    :class="[type]"
    class="button d-flex justify-s-b font-s-base"
  >
    <nuxt-icon name="arrow" class="button-icon" filled />
    {{ label }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: String,
  to: String,
  type: String,
});
</script>

<style lang="scss" scoped>
.button {
  height: 55px;
  line-height: 55px;
  gap: 55px;
  width: fit-content;
  padding: 0 18px;
  cursor: pointer;

  span {
    line-height: 55px;
  }

  &-icon {
    display: block;
    width: 20px;
    height: 11px;
  }
}

.dark.button {
  background: var(--dark);
  color: var(--red);

  :deep(path) {
    fill: var(--red);
  }
}

.red.button {
  background: var(--red);
  color: var(--dark);

  :deep(path) {
    fill: var(--dark);
  }
}
</style>
