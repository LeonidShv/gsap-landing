<template>
  <GraphicHorizontalItem
    v-for="{labe, rate, width} in graphicHorizontalItems"
    :labe="labe"
    :rate="rate"
    :width="width"
  />
</template>

<script setup>
import GraphicHorizontalItem from "@/pages/Home/components/GraphicHorizontal/GraphicHorizontalItem.vue";

defineProps({
  graphicHorizontalItems: Array,
})
</script>