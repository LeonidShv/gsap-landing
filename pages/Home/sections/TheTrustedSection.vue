<template>
  <section class="trusted p-20 d-flex">
    <VDivider data-gsap-trusted-divider-1 />
    <div class="trusted__info">
      <h2 data-gsap-trusted-title class="trusted__title c--red font-s-mid-title opacity-0">
        Trusted long-term partner
      </h2>
      <p data-gsap-trusted-text class="trusted__sub-title c--red font-s-sub-title opacity-0">
        For leading B2B tech and service companies
      </p>
    </div>
    <VDivider data-gsap-trusted-divider-2 />
    <p data-gsap-trusted-text class="trusted__text c--red font-s-base opacity-0">
      We combine disruptive marketing techniques with proven tech solutions to
      provide maximum business value.
    </p>

    <div class="d-flex trusted__cards">
      <TrustedCard
        v-for="(
          {
            background,
            isActive,
            isHoverMoveLeft,
            number,
            title,
            texts,
            icon,
            buttonLabel,
            buttonUrl,
            buttonType,
          },
          i
        ) in trustedCards"
        @mouseenter="onMouseHandler(i)" 
        @mouseleave="onMouseHandler(0)" 
        :background="background"
        :isActive="isActive"
        :isHoverMoveLeft="isHoverMoveLeft"
        :number="number"
        :title="title"
        :texts="texts"
        :icon="icon"
        :buttonLabel="buttonLabel"
        :buttonUrl="buttonUrl"
        :buttonType="buttonType"
        :key="i"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import TrustedCard from "@/pages/Home/components/TrustedCard/TrustedCard.vue";

const { gsap } = useGsap()

const scrollTrigger = {
  trigger: '[data-gsap-trusted-title]',
  start: 'top 95%'
}

function onMouseHandler(index) {
  trustedCards.value = trustedCards.value.map((card) => ({...card, isActive: false}))
  trustedCards.value[index].isActive = true;
}

onMounted(async () => {
  gsap.to('[data-gsap-trusted-title]', {
    duration: 0,
    text: '', 
    opacity: 1,
    scrollTrigger
  })

  gsap.to('[data-gsap-trusted-title]', {
    duration: 1,
    text: 'Trusted long-term partner',
    scrollTrigger
  })

  gsap.to('[data-gsap-trusted-text]', {
    duration: 1,
    opacity: 1,
    scrollTrigger
  })

  gsap.to('[data-gsap-trusted-divider-1]', {
    duration: 1,
    scaleX: 1,
    ease: "power4.out",
    scrollTrigger
  })

  gsap.to('[data-gsap-trusted-divider-2]', {
    duration: 1,
    scaleX: 1,
    ease: "power1.out",
    scrollTrigger
  })
})

const trustedCards = ref([
  {
    background: "bg--red",
    isActive: true,
    isHoverMoveLeft: false,
    number: "1",
    title: "B2B Marketing",
    texts: [
      `Your solution is of high value and great quality, but you have a hard
        time attracting the right audience? Wish to work with specific clients
        but can't cut through the noise of a saturated market? Or simply
        looking to advance your growth efforts?`,
      ` That's the challenge for real B2B marketing pros. Having a perfect
        knowledge of the digital landscape, we will help you identify the
        lowest hanging fruits before you spend a fortune on marketing
        campaigns. While you make good use of the results, we work on a
        sustainable strategy to scale your business in the long run.`,
    ],
    icon: "circle-1",
    buttonLabel: "Learn more",
    buttonUrl: "#",
    buttonType: "dark",
  },
  {
    background: "bg--dark",
    isActive: false,
    isHoverMoveLeft: true,
    number: "2",
    title: "LinkedIn Lead Generation",
    texts: [
      `Your business is all set up and now feel ready to expand your client
        list? You understand your ideal client and how your product can solve
        their problems?`,
      `That's when we come in with the comprehensive lead generation campaign
        to employ your sales team with more deals? Like experienced
        detectives, we will search for the prospects who drive the most value
        for your business. ext step? We make them talk to you. Unlike most
        salesy outreaches, our customized campaign is focused on building
        long-term relationships. Your sales team will love it.hv`,
    ],
    icon: "circle-2",
    buttonLabel: "Learn more",
    buttonUrl: "#",
    buttonType: "red",
  },
]);
</script>

<style scoped lang="scss">
.trusted {
  background: #fff;
  flex-direction: column;
  margin-top: 112px;

  &__cards {
    overflow: hidden;
  }

  &__info {
    padding: 10px 0 39px;
  }

  &__title {
    width: 1326px;
    margin-left: auto;
  }

  &__sub-title {
    margin-top: 32px;
    width: 440px;
    text-align: end;
    margin-left: auto;
  }

  &__text {
    margin: 57px 0 19px;
  }
}
</style>
