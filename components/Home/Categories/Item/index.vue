<script setup lang="ts">
import type ProjectsCategory from '~/types/Projects/ProjectsCategory'

interface itemProps {
  item: ProjectsCategory
}

defineProps<itemProps>()

const router = useRouter()
</script>

<template>
  <div class="item" @click="router.push(`/categories/${item.id}`)">
    <div class="item-img">
      <NuxtImg
        :src="item.image"
        loading="lazy"
        sizes="180px md:280px xl:316px"
      />
    </div>
    <div class="item-content">
      <div class="title title-s">
        {{ item.title }}
      </div>
      <ul class="ul ul-disc">
        <li
          v-for="text in item.descriptionList"
          :key="text"
          class="text text-md"
        >
          {{ text }}
        </li>
      </ul>
      <Button class="item-btn"> Подробнее</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.item {
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  background: $bg-white-alpha;
  cursor: pointer;
  transition: all 0.5s linear;
  position: relative;
  @media (max-width: $md3 + px) {
    border-radius: 20px;
    min-width: 210px;
  }

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    display: block;
    background: $bg-gradient;
    border-radius: 40px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s linear;
  }

  &-content {
    flex-grow: 1;
    padding: 0 40px 40px;
    display: flex;
    flex-direction: column;
    @media (max-width: $md3 + px) {
      padding: 16px 16px 30px;
    }
  }

  &-img {
    width: 280px;
    margin: -100px auto 0;
    @media (max-width: $md2 + px) {
      margin: -60px auto 0;
    }
    @media (max-width: $md3 + px) {
      width: 180px;
      margin: 0 auto;
    }

    img {
      width: 100%;
    }
  }

  &-btn {
    margin-top: auto;
    max-width: 170px;
    pointer-events: none;
    @media (max-width: $md2 + px) {
      max-width: 100%;
    }
    @media (max-width: $md3 + px) {
      display: none;
    }
  }

  ul {
    margin: 0 0 20px;
  }

  .title {
    color: $text-blue;
    margin: 0 0 20px;
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

      .item-btn {
        background: $bg-white;
        color: $text-primary;
      }
    }
  }
}
</style>
