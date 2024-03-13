<template>
  <div class="graphic-horizontal d-flex" data-gsap-graphic-horizontal>
    <div
      v-for="(
        { label, rate, width, isLeftContent }, i
      ) in graphicHorizontalItems"
      :key="i"
      class="d-flex"
    >
      <div
        data-gsap-graphic-horizontal-text
        class="graphic-horizontal__info d-flex opacity-0"
        :style="{
          left: isLeftContent
            ? `calc(${100 - width * 100}% + 100px)`
            : `calc(100% - 412px)`,
        }"
      >
        <p class="graphic-horizontal__label c--red font-s-base">
          {{ label }}
        </p>
        <p class="graphic-horizontal__rate c--red">
          {{ rate }}
        </p>
      </div>
      <div
        data-gsap-graphic-horizontal-item
        class="graphic-horizontal__item bg--dark d-flex"
      />
    </div>
  </div>
</template>

<script setup>
const { gsap } = useGsap()

const props = defineProps({
  graphicHorizontalItems: Array,
});

onMounted(async () => {
  gsap.utils.toArray("[data-gsap-graphic-horizontal-item]").forEach((item, i) => {
    const width = props.graphicHorizontalItems[i].width;

    gsap.to(item, {
      scrollTrigger: {
        trigger: '[data-gsap-graphic-horizontal]',
        start: 'top 95%'
      },
      scaleX: width,
      duration: 1,
      ease: "power2.out",
    })
  })

  gsap.to('[data-gsap-graphic-horizontal-text]', {
    scrollTrigger: {
      trigger: '[data-gsap-graphic-horizontal]',
      start: 'top 95%'
    },
    delay: .5,
    opacity: 1,
    duration: .5,
  })
})
</script>

<style lang="scss" scoped>
.graphic-horizontal {
  position: relative;
  flex-direction: column;
  gap: 1px;
  height: 100%;

  &__info {
    position: absolute;
    z-index: 1;
    gap: 20px;
  }

  &__label {
    display: flex;
    align-items: center;
    height: 93px;
    width: 200px;
    text-align: end;
  }

  &__rate {
    font-size: 66px;
    line-height: 93px;

    @media (max-width: 1600px) {
      font-size: 50px;
    }
  }

  &__item {
    padding: 16px 48px 16px 148px;
    width: 100%;
    height: 93px;
    transform-origin: right;
    transform: scaleX(0);
  }
}
</style>
