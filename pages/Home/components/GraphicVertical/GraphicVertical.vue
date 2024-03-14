<template>
  <div class="d-flex graphic-vertical" data-gsap-graphic-vertical>
    <div
      class="graphic-vertical__item-wrapper"
      v-for="{ rate, height } in graphicVerticalItems"
    >
      <p
        data-gsap-graphic-vertical-rate
        class="graphic-vertical__rate c--red opacity-0"
        :style="{ bottom: `calc(100% * ${height} + 4px)` }"
      >
        {{ rate }}
      </p>
      <div
        data-gsap-graphic-vertical-item
        class="graphic-vertical__item bg--red"
        :style="{
          width: `calc((100vw - 40px - ${graphicVerticalItems.length - 1}px) / ${graphicVerticalItems.length})`,
        }"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  graphicVerticalItems: Array,
});

const { gsap } = useGsap();

onMounted(async () => {
  const scrollTrigger = {
    trigger: "[data-gsap-graphic-vertical]",
    start: "top 95%",
  };
  gsap.utils.toArray("[data-gsap-graphic-vertical-item]").forEach((item, i) => {
    const height = props.graphicVerticalItems[i].height;

    gsap.to(item, {
      scaleY: height,
      duration: 1,
      ease: "power2.out",
      scrollTrigger,
    });
  });

  gsap.to("[data-gsap-graphic-vertical-rate]", {
    delay: 0.5,
    opacity: 1,
    duration: 0.5,
    scrollTrigger,
  });
});
</script>

<style lang="scss" scoped>
.graphic-vertical {
  gap: 1px;
  height: 100%;

  &__item-wrapper {
    position: relative;
  }

  &__item {
    height: 100%;
    transform-origin: bottom;
    transform: scaleY(0);
  }

  &__rate {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 15px;
  }
}
</style>
