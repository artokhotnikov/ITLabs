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
            <img
              :src="partner.imageNormal"
              loading="lazy"
              :alt="partner.title"
            />
          </div>
          <div class="partner-content">
            <div class="partner-title title title-xxs" v-html="partner.title" />
            <div class="partner-text text">
              {{ partner.description }}
            </div>
            <a
              :href="partner.link"
              target="_blank"
              class="partner-link text text-md"
            >
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
    @media (max-width: $md3 + px) {
      gap: 16px;
    }
  }

  &-title {
    margin: 0 0 8px;
    color: $text-blue;
  }

  .subtitle {
    color: $text-secondary;
    margin: 0 0 40px;
    @media (max-width: $md3 + px) {
      margin: 0 0 32px;
    }
  }
}

.partner {
  padding: 40px;
  background: $bg-white;
  border-radius: 20px;
  display: flex;
  gap: 40px;
  color: $text-secondary;
  transition: background 0.3s ease;
  cursor: pointer;
  @media (max-width: $md3 + px) {
    flex-direction: column;
    padding: 32px;
  }
  @media (min-width: $md3 + px) {
    &:hover {
      background: $bg-white-alpha;
    }
  }

  &-logo {
    width: 100%;
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: $md3 + px) {
      margin: 0 auto;
      min-height: 120px;
    }

    img {
      width: 100%;
    }
  }

  &-content {
  }

  &-title {
    margin: 0 0 20px;
  }

  &-text {
    margin: 0 0 40px;
  }

  &-link {
    color: $text-blue;
    font-weight: 500;
    @media (max-width: $md3 + px) {
      font-weight: 700;
    }
  }
}
</style>
