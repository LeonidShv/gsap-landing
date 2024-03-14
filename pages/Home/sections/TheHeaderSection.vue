<template>
  <div :class="{ 'header--scrolled': isShowShadow }" class="header p-20">
    <div class="header__logo-wrapper d-flex justify-s-b">
      <div class="relative">
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
      <VSlider :isFinishPreloader="isFinishPreloader" :slides="slides" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUpdated } from "vue";

const props = defineProps({
  isFinishPreloader: Boolean,
  isFinishPreloaderTextTyping: Boolean,
});

const slides = ref([
  {
    src: "/_nuxt/assets/images/header1.jpg",
    alt: "team for slide, 1 item",
    key: 1,
  },
  {
    src: "/_nuxt/assets/images/header2.jpg",
    alt: "team for slide, 2 item",
    key: 2,
  },
  {
    src: "/_nuxt/assets/images/header3.jpg",
    alt: "team for slide, 3 item",
    key: 3,
  },
  {
    src: "/_nuxt/assets/images/header4.jpg",
    alt: "team for slide, 4 item",
    key: 4,
  },
]);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const isScrollActive = ref(false);

function handleScroll(e) {
  const scrollPosition =
    window.scrollY ||
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    0;

  if (scrollPosition > 0) {
    isScrollActive.value = true;
  } else {
    isScrollActive.value = false;
  }
}

const isShowShadow = computed(() => {
  if (isScrollActive.value) {
    return true;
  }

  if (props.isFinishPreloaderTextTyping) {
    if (props.isFinishPreloader) {
      return false;
    }

    return true;
  }
});
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: calc(100vh - 87px);

  &--scrolled {
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: var(--grey);
      opacity: 0.3;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &__slider-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }

  /* TODO: DRY */
  &__logo--rotate {
    writing-mode: vertical-rl;
    top: 74px;

    &::before {
      content: ".";
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
