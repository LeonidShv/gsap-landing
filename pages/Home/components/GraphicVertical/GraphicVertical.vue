<template>
  <GraphicVerticalItem
    v-for="{rate, height} in graphicVerticalItems"
    :rate="rate"
    :height="height"
  />
</template>

<script setup>
import GraphicVerticalItem from "@/pages/Home/components/GraphicVertical/GraphicVerticalItem.vue";

defineProps({
  graphicVerticalItems: Array,
})
</script>