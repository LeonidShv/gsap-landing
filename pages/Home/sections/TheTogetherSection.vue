<template>
  <section>
    <h2>
      Let's fight cold together
    </h2>
    <p>
      We generated leads from 
top-performing companies
    </p>

    <div>
      <div v-for="{ companyIcon } in companies">
        <nuxt-icon :name="companyIcon" filled />
      </div>
    </div>
  </section>
</template>

<script setup>
const companies = ref([
  {
    companyIcon: 'companies/sap'
  },
  {
    companyIcon: 'companies/bayer'
  },
  {
    companyIcon: 'companies/office'
  },
  {
    companyIcon: 'companies/salesforce'
  },
  {
    companyIcon: 'companies/hp'
  }
])
</script>
