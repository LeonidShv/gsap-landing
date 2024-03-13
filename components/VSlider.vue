<template>
  <img
    v-if="!isFinishPreloader"
    class="slide"
    :src="slides[0].src"
    :alt="slides[0].alt"
  />
  <swiper
    v-else
    data-gsap-slider
    :autoplayStop="true"
    :centeredSlides="true"
    :effect="'fade'"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: false
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="{ src, alt, key } in slides" :key="key">
      <img class="slide" :src="src" :alt="alt" />
      <button class="test" @click="action">{{ alt }}</button>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

defineProps({
  slides: Array,
  isFinishPreloader: Boolean
})

const modules = ref([Autoplay, EffectFade])
</script>

<style lang="scss">
.test {
  background: green;
  padding: 30px;
  z-index: 999;
  margin-bottom: 100px;
}
.swiper {
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide,
.swiper-wrapper {
  transition-duration: 1ms !important;
}
</style>
