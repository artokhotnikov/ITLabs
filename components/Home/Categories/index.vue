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
    @include no-scroll;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 40px 0 0;
    @media (max-width: $md2 + px) {
      max-width: 100%;
      overflow-x: auto;
      overflow-y: visible;
    }
  }
}
</style>
