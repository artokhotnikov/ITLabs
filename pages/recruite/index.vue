<script setup lang="ts">
const breadcrumbs = [
  {
    title: 'Рекрутинг',
    path: 'recruite'
  }
]
</script>

<template>
  <div class="page">
    <div class="page-container container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="page-content">
<!--        <SectionAdvantages />-->
<!--        <SectionCarierHeight />-->
<!--        <SectionCommand />-->
<!--        <SectionDepartamentCare />-->
        <SectionGoToTeam />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.dark {
  .subtitle {
    color: $text-white;
  }
}

.page {
  padding: 0;

  &-content {
    display: flex;
    flex-direction: column;
    gap: 120px;
  }
}
</style>
