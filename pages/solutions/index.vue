<script setup lang="ts">
import data from '~/data/solutions'

definePageMeta({
  title: 'Решения'
})
useHead({
  title: 'Решения'
})

const router = useRouter()
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
        <div
          v-for="solution in data"
          :key="solution.id"
          class="item"
          @click="router.push(`/solutions/${solution.id}`)"
        >
          <div class="item-img">
            <NuxtImg :src="solution.imageCover" loading="lazy" />
          </div>
          <div class="text bold" v-html="solution.title" />
        </div>
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
  }
}

.item {
  display: flex;
  flex-direction: column;
  padding: 0 0 40px;
  border-radius: 40px;
  background: $bg-white-alpha-20;
  cursor: pointer;
  transition: all 0.5s linear;
  position: relative;
  text-align: center;
  color: $text-secondary;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: $bg-gradient;
    border-radius: 40px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s linear;
  }

  &-img {
    img {
      width: 100%;
    }
  }

  &-btn {
    margin-top: auto;
    max-width: 170px;
    pointer-events: none;
  }

  @media (min-width: $md3 + px) {
    &:hover {
      background: none;
      color: $text-white;

      &:before {
        opacity: 1;
      }
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
}
</style>
