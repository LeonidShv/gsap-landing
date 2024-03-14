<template>
  <div class="preloader" data-gsap-preloader>
    <p class="preloader__progress" data-gsap-preloader-progress />
  </div>

  <header class="preloader__logo-wrapper d-flex justify-s-b p-20">
    <div class="relative">
      <p
        data-gsap-logo-respect
        class="preloader__logo preloader__logo--default font-s-item c--red"
      >
        Respect
      </p>
      <p
        data-gsap-logo-studio
        class="preloader__logo preloader__logo--rotate font-s-item c--red"
      >
        Studio
      </p>
    </div>
    <p
      data-gsap-company-name
      class="preloader__company-name font-s-logo c--red"
    >
      Digital Marketing Agency
    </p>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'

const emit = defineEmits(['onFinishPreloader', 'onFinishPreloaderTextTyping'])

const { gsap } = useGsap()

const progressNumbers = [
  {
    text: '04',
    duration: 0.3
  },
  {
    text: '19',
    duration: 0.3
  },
  {
    text: '23',
    duration: 0.3
  },
  {
    text: '74',
    duration: 0.3
  },
  {
    text: '88',
    duration: 0.3
  },
  {
    text: '98',
    duration: 0.3
  },
  {
    text: '',
    duration: 0
  }
]

onMounted(async () => {
  document.body.style.overflow = 'hidden'
  const tl = gsap.timeline()

  for (const { text, duration } of progressNumbers) {
    await tl.to('[data-gsap-preloader-progress]', { duration, text, delay: .1 })
  }

  await tl.to('[data-gsap-logo-respect]', { duration: 0, text: '', opacity: 1 }).to(
    '[data-gsap-logo-studio]',
    {
      duration: 0,
      text: '',
      opacity: 1
    }
  )

  await tl.to('[data-gsap-logo-respect]', { duration: 1, text: 'Respect' }).to(
    '[data-gsap-logo-studio]',
    { duration: 1, text: 'Studio' },
    '-=0.8'
  )

  emit('onFinishPreloaderTextTyping')
  await tl.to('[data-gsap-preloader]', { duration: 0.5, yPercent: -100 })

  await tl.to('[data-gsap-company-name]', { duration: 0.2, opacity: 1 }, '-=0.2')

  document.body.style.overflow = 'auto'

  emit('onFinishPreloader')

  tl.to('[data-gsap-logo-respect]', { duration: 0, opacity: 0 })
    .to('[data-gsap-logo-studio]', { duration: 0, opacity: 0 })
    .to('[data-gsap-company-name]', { duration: 0, opacity: 0 })
})
</script>

<style scoped lang="scss">
.preloader {
  position: absolute;
  z-index: 2;
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
    z-index: 2;
    position: absolute;
  }

   /* TODO: DRY */
  &__logo--rotate {
    writing-mode: vertical-rl;
    top: 74px;

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
    opacity: 0;
  }

  &__company-name {
    width: 140px;
    text-align: end;
    opacity: 0;
  }
}
</style>
