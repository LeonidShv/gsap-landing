<template>
  <section class="growing bg--red p-20 d-flex justify-s-b">
    <h1 ref="growingTitle" class="growing__title c--dark font-s-big-title">
      <span
        :data-gsap="`growing-title-${i}`"
        v-for="({ text }, i) in growingTitleText"
        :key="i"
      >
        {{ text }}
      </span>
    </h1>
    <p ref="growingText" class="growing__text c--dark font-s-base">
      B2B Marketing & LinkedIn Lead Generation agency
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap-trial'
import { TextPlugin } from 'gsap-trial/TextPlugin'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger'

gsap.registerPlugin(TextPlugin, ScrollTrigger)
// gsap.registerPlugin(ScrollTrigger);

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

const growingText = ref(null)
const growingTitle = ref(null)


onMounted(async () => {
  // tlSetion.to(growingSection.value, {
  //   yPercent: -50,
  //   duration: 1
  // })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: growingTitle.value,
      start: 'center center'
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
    growingText.value,
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
    // text-align: end;
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
