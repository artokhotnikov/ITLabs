<script setup lang="ts">
import data from '~/data/partners'

definePageMeta({
  title: 'Партнеры'
})
useHead({
  title: 'Партнеры'
})
</script>

<template>
  <div class="page partners">
    <div class="container">
      <Breadcrumbs />
      <h1 class="partners-title title">Партнеры</h1>
      <div class="subtitle medium">Компании, которые нам доверяют</div>
      <div v-if="data.length" class="partners-list">
        <div v-for="partner in data" :key="partner.title" class="partner">
          <div class="partner-logo">
            <NuxtImg :src="partner.imageNormal" loading="lazy" />
          </div>
          <div class="partner-content">
            <div class="partner-title title title-s" v-html="partner.title" />
            <div class="partner-text text">
              {{ partner.description }}
            </div>
            <a :href="partner.link" target="_blank" class="text text-md">
              {{ partner.linkTitle }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.partners {
  &-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .title {
    margin: 0 0 8px;
    color: $text-blue;
  }

  .subtitle {
    color: $text-secondary;
    margin: 0 0 40px;
  }
}

.partner {
  padding: 40px;
  background: $bg-white;
  border-radius: 40px;
  display: flex;
  gap: 40px;

  &-logo {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  &-content {
  }

  &-title {
  }

  &-text {
  }
}

.bold {
}

.text {
  &-md {
  }
}
</style>
