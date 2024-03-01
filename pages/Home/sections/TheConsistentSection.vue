<template>
  <section class="consistent">
    <h2 class="consistent__title font-s-small-title c--dark">
      Consitent leads flow to streamline Your business growth.
    </h2>
    <div class="consistent__graphic-wrapper">
      <p class="consistent__text font-s-base c--dark">
        We combine disruptive marketing techniques with proven tech solutions to
        provide maximum business value.
      </p>

      <GraphicVertical :graphicVerticalItems="graphicVerticalItems" />
    </div>
  </section>
  <section>
    <GraphicHorizontal :graphicHorizontalItems="graphicHorizontalItems" />
  </section>
</template>

<script setup>
import GraphicVertical from "@/pages/Home/components/GraphicVertical/GraphicVertical.vue";
import GraphicHorizontal from "@/pages/Home/components/GraphicHorizontal/GraphicHorizontal.vue";

const graphicVerticalItems = ref([
  {
    rate: "27",
    height: "0.15",
  },
  {
    rate: "53",
    height: "0.22",
  },
  {
    rate: "61",
    height: "0.28",
  },
  {
    rate: "30",
    height: "0.21",
  },
  {
    rate: "63",
    height: "0.16",
  },
  {
    rate: "55",
    height: "0.3",
  },
  {
    rate: "63",
    height: "0.4",
  },
  {
    rate: "71",
    height: "0.5",
  },
  {
    rate: "76",
    height: "0.42",
  },
  {
    rate: "67",
    height: "0.6",
  },
  {
    rate: "88",
    height: "0.7",
  },
  {
    rate: "68",
    height: "0.8",
  },
  {
    rate: "78",
    height: "0.73",
  },
  {
    rate: "90",
    height: "0.9",
  },
]);

const graphicHorizontalItems = ref([
  {
    rate: "1570",
    width: "0.9",
    label: "Revenue generated for clients",
  },
  {
    rate: "1200",
    width: "0.5",
    label: "Conversationd opened",
  },
  {
    rate: "378",
    width: "0.8",
    label: "Leads generated via targeted",
  },
  {
    rate: "197",
    width: "0.4",
    label: "Calls scheduled for clients",
  },
]);
</script>

<style scoped lang="scss">
.consistent {
  height: 100vh;
  padding: 20px 20px 0;

  &__graphic-wrapper {
    position: relative;
    height: calc(100vh - 341px);
  }

  &__title {
    max-width: 1275px;
    margin: 107px 0 24px;
  }

  &__text {
    position: absolute;
    top: 0;
    left: 0;
    width: 580px;
  }
}
</style>
