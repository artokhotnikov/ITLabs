<script setup lang="ts">
import { useContentStore } from '~/store/contentStore'

const contentStore = useContentStore()
const router = useRouter()
</script>

<template>
  <section class="categories section">
    <div class="container">
      <div v-if="contentStore.projectCategories.length" class="categories-list">
        <HomeCategoriesItem
          v-for="cat in contentStore.projectCategories.slice(0, 7)"
          :key="cat.id"
          :item="cat"
        />
      </div>
      <Button @click="router.push('/categories')" class="categories-btn">
        Все услуги
      </Button>
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
    @media (max-width: ($md4 + px)) {
      flex-direction: column;
    }
  }

  &-btn {
    margin: 32px auto 0;
    @media (max-width: ($md2 + px)) {
      width: 100%;
    }
  }
}
</style>
