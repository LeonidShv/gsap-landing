<template>
  <section class="consistent">
    <h2 class="consistent__title font-s-small-title c--dark">
      Consitent leads flow to streamline Your business growth.
    </h2>
    <div class="consistent__graphic-vertical">
      <p class="consistent__text font-s-base c--dark">
        We combine disruptive marketing techniques with proven tech solutions to
        provide maximum business value.
      </p>

      <GraphicVertical :graphicVerticalItems="graphicVerticalItems" />
    </div>

    <div class="consistent__graphic-horizontal">
      <GraphicHorizontal :graphicHorizontalItems="graphicHorizontalItems" />
    </div>
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
    isLeftContent: false,
  },
  {
    rate: "1200",
    width: "0.5",
    label: "Conversationd opened",
    isLeftContent: true,
  },
  {
    rate: "378",
    width: "0.8",
    label: "Leads generated via targeted",
    isLeftContent: true,
  },
  {
    rate: "197",
    width: "0.4",
    label: "Calls scheduled for clients",
    isLeftContent: true,
  },
]);
</script>

<style scoped lang="scss">
.consistent {
  height: calc(100vh + 341px);
  padding: 20px 20px 0;

  &__graphic-vertical {
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

  &__graphic-horizontal {
    margin-top: 1px;
  }
}
</style>
