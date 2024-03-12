<template>
  <div class="graphic-horizontal d-flex">
    <div
      v-for="(
        { label, rate, width, isLeftContent }, i
      ) in graphicHorizontalItems"
      :key="i"
      class="d-flex"
    >
      <div
        class="graphic-horizontal__info d-flex"
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
        class="graphic-horizontal__item bg--dark d-flex"
        :style="{
          transform: `scaleX(${width})`,
        }"
      />
    </div>
  </div>


  <!-- <div class="wrapper-box">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
    </div> -->
</template>

<script setup>
const { gsap } = useGsap()

defineProps({
  graphicHorizontalItems: Array,
});

// onMounted(() => {
//   const tl = gsap.timeline();
//   tl.to(".box", {
//     scaleX: 1,
//     duration: .5,
//     stagger: 0.1
//   })
// });
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
  }
}


// .wrapper-box {
//   background: green;
//   width: 500px;
//   height: 510px;
// }

// .box {
//   transform: scaleX(0);
//   margin-bottom: 1px;
//   background: blue;
//   width: 500px;
//   height: 100px;
//   border: 1px solid white;
//   transform-origin: left center;
// }
</style>
