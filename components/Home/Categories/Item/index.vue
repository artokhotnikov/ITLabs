<script setup lang="ts">
import type ProjectsCategory from '~/types/Projects/ProjectsCategory'
import { useContentStore } from '~/store/contentStore'

interface itemProps {
  item: ProjectsCategory
}

defineProps<itemProps>()

const router = useRouter()
const contentStore = useContentStore()
</script>

<template>
  <div class="item" @click="router.push(`/categories/${item.id}`)">
    <div class="item-content">
      <div class="text text-md bold">
        {{ item.title }}
      </div>
    </div>
    <div class="item-img">
      <img
        :src="contentStore.URL + item.image"
        :alt="item.title"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background: $bg-white-alpha;
  cursor: pointer;
  transition: all 0.5s linear;
  position: relative;
  color: $text-secondary;
  flex-shrink: 0;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    display: block;
    background: $bg-gradient;
    border-radius: 20px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s linear;
  }

  &-content {
    padding: 20px;
  }

  .text {
    max-width: 116px;
  }

  &-img {
    width: 150px;
    flex-shrink: 0;

    img {
      width: 100%;
    }
  }

  @media (min-width: $md2 + px) {
    &:nth-child(1) {
      flex-basis: 300px;
    }
    &:nth-child(2) {
      flex-basis: 270px;
    }
    &:nth-child(3) {
      flex-basis: 270px;
    }
    &:nth-child(4) {
      flex-basis: 270px;
    }
    &:nth-child(5) {
      flex-basis: 260px;
    }
    &:nth-child(6) {
      flex-basis: 300px;
    }
    &:nth-child(7) {
      flex-basis: 400px;
      .text {
        max-width: 210px;
      }
    }
  }

  @media (min-width: $md3 + px) {
    &:hover {
      background: none;

      &:before {
        opacity: 1;
      }

      .title,
      .text {
        color: $text-white;
      }
    }
  }
  @media (max-width: $md3 + px) {
    flex: 1 1 40%;
  }
}

.dark .item {
  background: $bg-white-alpha-5;
  color: $text-white;
}
</style>
