<script setup>
definePageMeta({
  title: 'ITLabs'
})
useHead({
  title: 'ITLabs'
})
</script>

<template>
  <div class="page page-main">
    <ClientOnly>
      <HomeSlider />
    </ClientOnly>
    <HomeCategories />
    <HomeProjects />
    <HomeStages />
    <HomePrices />
    <SectionClients />
    <SectionReviews />
    <ConctactSection />
  </div>
</template>

<style scoped lang="scss"></style>
