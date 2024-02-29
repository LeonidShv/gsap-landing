<template>
<section>
  <h2>
    Consitent leads flow to streamline Your business growth. 
  </h2>
  <p>
    We combine disruptive marketing techniques with proven tech solutions to provide maximum business value. 
  </p>
  <div>
    <GraphicVertical :graphicVerticalItems="graphicVerticalItems" />
    <GraphicHorizontal :graphicHorizontalItems="graphicHorizontalItems" />
  </div>
</section>
</template>

<script setup>
import GraphicVertical from "@/pages/Home/components/GraphicVertical/GraphicVertical.vue";
import GraphicHorizontal from "@/pages/Home/components/GraphicHorizontal/GraphicHorizontal.vue";

const graphicVerticalItems = ref([
  {
    rate: '123',
    height: '0.9'
  },
  {
    rate: '523',
    height: '0.5'
  },
  {
    rate: '823',
    height: '0.8'
  },
  {
    rate: '1223',
    height: '0.4'
  },
  {
    rate: '123',
    height: '0.9'
  },
  {
    rate: '523',
    height: '0.5'
  },
  {
    rate: '823',
    height: '0.8'
  },
  {
    rate: '1223',
    height: '0.4'
  },
  {
    rate: '123',
    height: '0.9'
  },
  {
    rate: '523',
    height: '0.5'
  },
  {
    rate: '823',
    height: '0.8'
  },
  {
    rate: '1223',
    height: '0.4'
  },
  {
    rate: '123',
    height: '0.9'
  },
  {
    rate: '523',
    height: '0.5'
  }
])

const graphicHorizontalItems = ref([
  {
    rate: '1570',
    width: '0.9',
    label: 'Revenue generated for clients'
  },
  {
    rate: '1200',
    width: '0.5',
    label: 'Conversationd opened'
  },
  {
    rate: '378',
    width: '0.8',
    label: 'Leads generated via targeted'
  },
  {
    rate: '197',
    width: '0.4',
    label: 'Calls scheduled for clients'
  },
])
</script>
