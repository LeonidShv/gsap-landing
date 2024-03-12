<template>
  <div class="header p-20">
    <div class="header__logo-wrapper d-flex justify-s-b">
      <div>
        <p class="header__logo header__logo--default font-s-item c--red">
          Respect
        </p>
        <p class="header__logo header__logo--rotate font-s-item c--red">
          Studio
        </p>
      </div>
      <p class="header__company-name font-s-logo c--red">
        Digital Marketing Agency
      </p>
    </div>

    <div class="header__slider-wrapper">
      <VSlider :slides="slides" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slides = ref([
  {
    src: '/_nuxt/assets/images/header1.jpg',
    alt: 'team for slide, first item'
  }
])
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: calc(100vh - 87px);

  &__slider-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  /* TODO: DRY */

  &__logo--default {
    top: 20px;
    left: 20px;
  }

  &__logo--rotate {
    writing-mode: vertical-rl;
    left: 20px;
    top: 82px;

    &::before {
      content: '.';
      font-size: var(--font-s-item);
      position: absolute;
      top: -10px;
      left: -10px;
    }
  }

  &__logo {
    width: fit-content;
    position: absolute;
    opacity: 1;
  }

  &__company-name {
    width: 140px;
    text-align: end;
    opacity: 1;
  }
}
</style>
