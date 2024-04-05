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
      <NuxtImg :src="item.imageCover" loading="lazy" />
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
    margin-top: -120px;
    img {
      width: 100%;
    }
  }

  &-btn {
    margin-top: auto;
    max-width: 170px;
    pointer-events: none;
  }

  ul {
    margin: 0 0 20px;
  }

  .subtitle {
    color: $text-blue;
    margin: 0 0 20px;
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
</style>
