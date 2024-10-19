<script setup lang="ts">
import type Project from '~/types/Projects/Project'
import { useContentStore } from '~/store/contentStore'

export interface itemProps {
  item: Project
  active: number
}

const props = defineProps<itemProps>()
const router = useRouter()

const { URL } = useContentStore()
</script>

<template>
  <div class="item">
    <div class="item-img">
      <NuxtPicture :src="URL + item.imageCard" :alt="item.title" />
    </div>
    <label :for="String(item.id)" class="card">
      <span class="description">
        <span class="title title-s">{{ item.title }}</span>
        <span class="card-text text text-md" v-html="item.description" />
      </span>
    </label>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.item {
  position: relative;
  width: 316px;
  height: 328px;

  &-img {
    width: 316px;
    height: 328px;

    :deep(img) {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      object-fit: cover;
    }
  }
}

.card {
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  height: 100%;

  &:before {
    content: '';
    inset: 0;
    width: 316px;
    height: 328px;
    position: absolute;
    border-radius: 16px;

    background: linear-gradient(
      90deg,
      rgba(45, 55, 68, 1) 0%,
      rgba(45, 55, 68, 0) 100%
    );
  }

  &-subtitle {
    text-transform: capitalize;
    color: $text-white-alpha;
  }

  .title {
    color: $text-blue;
    margin: 8px 0 20px;
  }

  &-text {
    color: $text-white;
    max-width: 360px;
  }

  &-footer {
    display: flex;
    align-items: center;
    gap: 34px;
    padding-top: 40px;
    position: relative;
  }
}

.description {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition-delay: 0.3s;
  transition: all 0.3s ease;
  position: relative;
}
</style>
