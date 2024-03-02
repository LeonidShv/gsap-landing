<template>
  <header class="header p-20">
    <div class="d-flex justify-s-b">
      <div>
        <p class="header__logo font-s-item c--red">Respect</p>
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
  </header>
  <VNavigation :navigation="navigation" />
</template>

<script setup>
import { ref } from "vue";

const slides = ref([
  {
    src: "/_nuxt/assets/images/header1.jpg",
    alt: "team for slide, first item",
  },
]);

const navigation = ref([
  {
    label: "Services",
    url: "#",
    offset: false,
  },
  {
    label: "Case Studies",
    url: "#",
    offset: false,
  },
  {
    label: "Blog",
    url: "#",
    offset: false,
  },
  {
    label: "About us",
    url: "#",
    offset: false,
  },
  {
    label: "We're hiring",
    url: "#",
    offset: true,
  },
  {
    label: "Contacts",
    url: "#",
    offset: false,
  },
]);
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

  &__logo--rotate {
    transform: rotate(90deg);
    position: absolute;
    right: calc(100% - 126px);
    top: 130px;

    &::before {
      content: ".";
      font-size: var(--font-s-item);
      position: absolute;
      top: 11px;
      left: -10px;
    }
  }

  &__logo {
    width: fit-content;
  }

  &__company-name {
    width: 140px;
    text-align: end;
  }
}
</style>
