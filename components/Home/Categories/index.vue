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
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.categories {
  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    @media (max-width: $md4 + px) {
      flex-direction: column;
    }
  }
}
</style>
