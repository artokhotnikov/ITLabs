<script setup lang="ts">
import projectsCategories from '~/data/projectsCategories'
</script>

<template>
  <section class="categories section">
    <div class="container">
      <div class="categories-list">
        <HomeCategoriesItem
          v-for="cat in projectsCategories"
          :key="cat.id"
          :item="cat"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.categories {
  margin: 20px 0 0;

  &-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
</style>
