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
    <div class="container">
      <div class="page-slider">
        <ClientOnly>
          <HomeSlider />
          <template #fallback>
            <div class="page-slider-skeleton">
              <Skeleton />
            </div>
          </template>
        </ClientOnly>
      </div>
    </div>
    <HomeCategories />
    <HomeProjects />
    <HomeStages />
    <HomePrices />
    <SectionClients />
    <SectionReviews />
    <ConctactSection />
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
.page-slider {
  height: 420px;
  overflow: hidden;

  @media (max-width: ($md4 + px)) {
    height: 440px;
  }

  &-skeleton {
    height: 100%;
  }
}
</style>
