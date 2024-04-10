<script setup>
definePageMeta({
  title: 'ITLabs'
})
useHead({
  title: 'ITLabs'
})
</script>

<template>
  <div class="page">
    <ClientOnly>
      <HomeSlider />
    </ClientOnly>
    <HomeCategories />
    <HomeSolutions />
    <HomeProjects />
    <HomeStages />
    <HomeDiscussion />
    <HomePartners />
    <HomePrices />
  </div>
</template>

<style scoped lang="scss">
div {
}
</style>
