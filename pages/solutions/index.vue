<script setup lang="ts">
import data from '~/data/solutions'

definePageMeta({
  title: 'Решения'
})
useHead({
  title: 'Решения'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <Breadcrumbs />
      <h1 class="title">Решения</h1>
      <div class="subtitle medium">
        Готовые продукты и приложения для вашего бизнеса
      </div>
      <div class="page-list">
        <SolutionsItem
          v-for="solution in data"
          :key="solution.id"
          :solution="solution"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.page {
  &-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media (max-width: $md2 + px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: $md3 + px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
  }
}

.title {
  color: $text-blue;
  margin: 0 0 8px;
}

.subtitle {
  color: $text-secondary;
  margin: 0 0 60px;
  @media (max-width: $md3 + px) {
    margin: 0 0 40px;
  }
}
</style>
