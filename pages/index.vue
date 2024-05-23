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
    <HomeProjects />
    <HomeStages />
    <HomePrices />
    <ConctactSection />
  </div>
</template>

<style scoped lang="scss">
div {
}
</style>
