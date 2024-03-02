<template>
  <div class="d-flex graphic-vertical">
    <div
      class="graphic-vertical__item-wrapper"
      v-for="{ rate, height } in graphicVerticalItems"
    >
      <p
        class="graphic-vertical__rate c--red"
        :style="{ bottom: `calc(100% * ${height} + 4px)` }"
      >
        {{ rate }}
      </p>
      <div
        class="graphic-vertical__item bg--red"
        :style="{
          transform: `scaleY(${height})`,
          width: `calc((100vw - 40px - ${graphicVerticalItems.length - 1}px) / ${graphicVerticalItems.length})`,
        }"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  graphicVerticalItems: Array,
});
</script>

<style lang="scss" scoped>
.graphic-vertical {
  gap: 1px;
  height: 100%;

  &__item-wrapper {
    position: relative;
  }

  &__item {
    height: 100%;
    transform-origin: bottom;
  }

  &__rate {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 15px;
  }
}
</style>
