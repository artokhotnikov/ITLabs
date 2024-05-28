<script setup lang="ts">
import { useContentStore } from '~/store/contentStore'

const contentStore = useContentStore()
</script>

<template>
  <section class="categories section">
    <div class="container">
      <div v-if="contentStore.projectCategories.length" class="categories-list">
        <HomeCategoriesItem
          v-for="cat in contentStore.projectCategories"
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
