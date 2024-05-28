<script setup lang="ts">
import { useContentStore } from '~/store/contentStore'

definePageMeta({
  title: 'Услуги'
})
useHead({
  title: 'Услуги'
})

const router = useRouter()
const contentStore = useContentStore()
</script>

<template>
  <div class="page categories">
    <div class="container">
      <Breadcrumbs />
      <div v-if="contentStore.projectCategories.length" class="categories-list">
        <div
          v-for="category in contentStore.projectCategories"
          :key="category.id"
          class="category"
        >
          <div class="category-img">
            <img
              :src="contentStore.URL + category.image"
              :alt="category.title"
            />
          </div>
          <div class="category-content">
            <h3 class="category-title title title-s">{{ category.title }}</h3>
            <h5
              v-if="category.subtitle"
              class="category-subtitle subtitle bold"
            >
              {{ category.subtitle }}
            </h5>
            <div
              v-if="category.description"
              class="category-text text text-md"
              v-html="category.description"
            />
            <Button
              class="category-btn"
              @click="router.push(`/categories/${category.id}`)"
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.dark {
  .category {
    background: $bg-white-alpha-5;

    &-subtitle {
      color: $text-white;
    }
  }
}

.categories {
  &-list {
    display: grid;
    gap: 20px;
    max-width: 1020px;
    margin: 0 auto;
  }
}

.category {
  padding: 40px;
  border-radius: 40px;
  background: $bg-white;
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: $md4 + px) {
    padding: 32px;
    border-radius: 20px;
    flex-direction: column;
  }

  &-img {
    width: 100%;
    max-width: 396px;
    flex-shrink: 0;
    @media (max-width: $md2 + px) {
      max-width: 300px;
    }
    @media (max-width: $md3 + px) {
      max-width: 250px;
    }

    img {
      width: 100%;
    }
  }

  &-content {
  }

  &-title {
    color: $text-blue;
  }

  &-subtitle {
    margin: 20px 0 0;
    @media (max-width: $md4 + px) {
      margin: 8px 0 0;
    }
  }

  &-text {
    margin: 40px 0 0;
    color: $text-third;
    @media (max-width: $md4 + px) {
      margin: 32px 0 0;
    }
  }

  &-btn {
    margin: 40px 0 0;
    width: 180px;
    @media (max-width: $md4 + px) {
      margin: 32px 0 0;
      width: 100%;
    }
  }
}
</style>
