<template>
  <div class="panel">
    <TheHeaderSection />
  </div>
  
  <div class="panel">
    <VNavigation :navigation="navigation" />
    <TheGrowingSection  />
    <TheConsistentSection  />
    <TheTrustedSection />
  </div>
</template>

<script setup>
import TheHeaderSection from '@/pages/Home/sections/TheHeaderSection.vue'
import TheGrowingSection from '@/pages/Home/sections/TheGrowingSection.vue'
import TheConsistentSection from '@/pages/Home/sections/TheConsistentSection.vue'
import TheTrustedSection from '@/pages/Home/sections/TheTrustedSection.vue'

import { ref, onMounted } from 'vue'
import gsap from 'gsap-trial'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger'
import { ScrollToPlugin } from 'gsap-trial/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

onMounted(async () => {
  let panels = gsap.utils.toArray('.panel')
  // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
  let tops = panels.map((panel) =>
    ScrollTrigger.create({ trigger: panel, start: "top top" })
  )

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: () =>
        panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom', // if it's shorter than the viewport, we prefer to pin it at the top
      pin: true,
      pinSpacing: false
    })
  })

  ScrollTrigger.create({
    snap: {
      snapTo: (progress, self) => {
        let panelStarts = tops.map((st) => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
          snapScroll = gsap.utils.snap(panelStarts, self.scroll()) // find the closest one
        return gsap.utils.normalize(
          0,
          ScrollTrigger.maxScroll(window) * 2,
          snapScroll
        ) // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
      },
      duration: 0.5
    }
  })
})

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

<style lang="scss">
//

</style>
