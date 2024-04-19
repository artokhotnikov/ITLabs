<script setup lang="ts">
import type Solution from '~/types/Solution/Solution'

interface ItemProps {
  item: Solution
}

defineProps<ItemProps>()
</script>

<template>
  <div class="item">
    <div class="item-img">
      <img :src="item.imageCover" loading="lazy" :alt="item.title" />
    </div>
    <div class="subtitle bold" v-html="item.title" />
    <ul class="ul ul-disc">
      <li
        v-for="text in item.mainFunctionalityCover"
        :key="text"
        class="text text-md"
      >
        {{ text }}
      </li>
    </ul>
    <Button class="item-btn">Подробнее</Button>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.item {
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  border-radius: 40px;
  background: $bg-white-alpha;
  cursor: pointer;
  transition: all 0.5s linear;
  position: relative;
  @media (max-width: $md3 + px) {
    padding: 16px;
    border-radius: 20px;
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
    @media (max-width: $md3 + px) {
      border-radius: 20px;
    }
  }

  &-img {
    margin-top: -120px;
    width: 230px;
    @media (max-width: $md3 + px) {
      width: 130px;
      margin-top: -70px;
    }

    img {
      width: 100%;
    }
  }

  &-btn {
    margin-top: auto;
    max-width: 170px;
    pointer-events: none;
    @media (max-width: $md3 + px) {
      display: none;
    }
  }

  ul {
    margin: 0 0 20px;
  }

  .subtitle {
    color: $text-blue;
    margin: 0 0 20px;
    @media (max-width: $md3 + px) {
      margin: 0 0 16px;
    }
  }

  @media (min-width: $md3 + px) {
    &:hover {
      background: none;

      &:before {
        opacity: 1;
      }

      .subtitle,
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
.dark .item {
  background: $bg-white-alpha-5;
  color: $text-white;
}
</style>
