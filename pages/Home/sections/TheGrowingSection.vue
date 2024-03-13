<template>
  <section class="growing bg--red p-20 d-flex justify-s-b">
    <h1 data-gsap-growing-title class="growing__title c--dark font-s-big-title">
      <span
        :data-gsap="`growing-title-${i}`"
        v-for="({ text }, i) in growingTitleText"
        :key="i"
      >
        {{ text }}
      </span>
    </h1>
    <p data-gsap-growing-text class="growing__text c--dark font-s-base">
      B2B Marketing & LinkedIn Lead Generation agency
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { gsap, TextPlugin, ScrollTrigger } = useGsap()

const growingTitleText = ref([
  {
    text: 'Growing',
    duration: '0.4'
  },
  {
    text: 'businesses',
    duration: '0.5'
  },
  {
    text: 'by',
    duration: '0.2'
  },
  {
    text: 'building',
    duration: '0.4'
  },
  {
    text: 'relationships',
    duration: '0.5'
  }
])

onMounted(async () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '[data-gsap-growing-title]',
      start: 'top 90%'
    }
  })

  for (let i = 0; i < growingTitleText.value.length; i++) {
    tl.to(`[data-gsap="growing-title-${i}"]`, {
      duration: 0,
      opacity: 1,
      text: ''
    })
  }

  for (let i = 0; i < growingTitleText.value.length; i++) {
    const { duration, text } = growingTitleText.value[i]

    tl.to(`[data-gsap="growing-title-${i}"]`, {
      duration,
      text
    })
  }

  tl.to(
    '[data-gsap-growing-text]',
    {
      opacity: 1,
      duration: 0.3
    },
    '-=0.15'
  )
})
</script>

<style scoped lang="scss">
.growing {
  flex-direction: column;
  height: calc(100vh - 87px);

  &__title {
    margin-left: auto;
    width: 800px;
    min-width: 800px;
    margin-top: 54px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      opacity: 0;
    }
  }

  &__text {
    opacity: 0;
    width: 320px;
  }
}
</style>
