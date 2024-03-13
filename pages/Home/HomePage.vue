<template>
  <VPreloader
    v-if="isFirstLoading" 
    @onFinishPreloader="isFinishPreloader = true"
    @onFinishPreloaderTextTyping="isFinishPreloaderTextTyping = true"
   />
  <div data-gsap-header>
    <TheHeaderSection 
      :isFinishPreloader="isFinishPreloader"
      :isFinishPreloaderTextTyping="isFinishPreloaderTextTyping"
    />
  </div>

  <div data-gsap-header-body class="static">
    <VNavigation :navigation="navigation" />
    <TheGrowingSection />
    <TheConsistentSection />
    <TheTrustedSection />
  </div>
</template>

<script setup>
import TheHeaderSection from '@/pages/Home/sections/TheHeaderSection.vue'
import TheGrowingSection from '@/pages/Home/sections/TheGrowingSection.vue'
import TheConsistentSection from '@/pages/Home/sections/TheConsistentSection.vue'
import TheTrustedSection from '@/pages/Home/sections/TheTrustedSection.vue'

import { ref, onMounted } from 'vue'

const { gsap, ScrollTrigger, ScrollToPlugin } = useGsap()

const isFinishPreloader = ref(false)
const isFinishPreloaderTextTyping = ref(false)
const isFirstLoading = computed(() => {
  return !localStorage.getItem('isFirstLoading')
})

onMounted(async () => {
  ScrollTrigger.create({
    trigger: '[data-gsap-header]',
    start: 'top top',
    pin: true,
    pinSpacing: false
  })

  ScrollTrigger.create({
    trigger: '[data-gsap-header-body]',
    start: 'top top',
    pin: true,
    pinSpacing: false
  })

  localStorage.setItem('isFirstLoading', '1')
})

const navigation = ref([
  {
    label: 'Services',
    url: '#',
    offset: false
  },
  {
    label: 'Case Studies',
    url: '#',
    offset: false
  },
  {
    label: 'Blog',
    url: '#',
    offset: false
  },
  {
    label: 'About us',
    url: '#',
    offset: false
  },
  {
    label: "We're hiring",
    url: '#',
    offset: true
  },
  {
    label: 'Contacts',
    url: '#',
    offset: false
  }
])
</script>

<style lang="scss">
.static {
  position: static !important;
}
</style>
