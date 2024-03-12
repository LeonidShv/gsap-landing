<template>
  <div class="preloader" ref="preloader">
    <p class="preloader__progress" ref="preloaderProgress" />
  </div>
  <header class="preloader__logo-wrapper d-flex justify-s-b p-20">
    <div>
      <p
        ref="logoRespect"
        class="preloader__logo preloader__logo--default font-s-item c--red"
      >
        Respect
      </p>
      <p
        ref="logoStudio"
        class="preloader__logo preloader__logo--rotate font-s-item c--red"
      >
        Studio
      </p>
    </div>
    <p 
      ref="companyName"
      class="preloader__company-name font-s-logo c--red"
    >
      Digital Marketing Agency
    </p>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsagsap-trialp';
import { TextPlugin } from 'gsap-trial/TextPlugin';
gsap.registerPlugin(TextPlugin);

const preloader = ref(null);
const preloaderProgress = ref(null);
const logoRespect = ref(null);
const logoStudio = ref(null);
const companyName = ref(null);

const progressNumbers = [
  {
    text: '04',
    duration: 0.4
  },
  {
    text: '19',
    duration: 0.4
  },
  {
    text: '23',
    duration: 0.4
  },
  {
    text: '74',
    duration: 0.4
  },
  {
    text: '88',
    duration: 0.4
  },
  {
    text: '98',
    duration: 0.4
  },
  {
    text: '',
    duration: 0
  }
];

onMounted(async () => {
  document.body.style.overflow = 'hidden'
  const tl = gsap.timeline()

  for (const { text, duration } of progressNumbers) {
    await tl.to(preloaderProgress.value, { duration, text })
  }

  tl.to(logoRespect.value, { duration: 0, text: '', opacity: 1 })
    .to(logoStudio.value, {
      duration: 0,
      text: '',
      opacity: 1 
    })

  tl.to(logoRespect.value, { duration: 1, text: 'Respect' })
    .to(
      logoStudio.value,
      { duration: 1, text: 'Studio' },
      '-=0.8'
    )

  tl.to(preloader.value, { duration: 0.5, yPercent: -100 })

  tl.to(companyName.value, { duration: 0.2, opacity: 1}, "-=0.2")

  document.body.style.overflow = 'auto'
})
</script>

<style scoped lang="scss">
.preloader {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  height: 100vh;
  background: var(--dark-blue);

  &__progress {
    position: absolute;
    bottom: 24px;
    right: 20px;
    color: var(--red);
    font-size: 230px;
    box-shadow: rgba(0, 0, 0, 0.25);
  }

  &__logo-wrapper {
    width: 100%;
    z-index: 2;
    position: absolute;
  }

  &__logo--default {
    top: 20px;
    left: 20px;
  }

  &__logo--rotate {
    writing-mode: vertical-rl;
    left: 20px;
    top: 82px;

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
    opacity: 0;
  }

  &__company-name {
    width: 140px;
    text-align: end;
    opacity: 0;
  }
}
</style>
