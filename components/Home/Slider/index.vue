<script setup>
import { Splide } from '@splidejs/vue-splide'
import { useContentStore } from '~/store/contentStore'

const contentStore = useContentStore()

const splide = ref()
const options = {
  perPage: 1,
  arrows: false,
  autoplay: true,
  interval: 10000,
  progress: true,
  type: 'loop',
  gap: 20
}
</script>

<template>
  <div v-if="contentStore.homeSlides.length" class="splider">
    <div class="container">
      <Splide ref="splide" class="splider-slider" :options="options">
        <HomeSliderSlide
          v-for="slide in contentStore.homeSlides"
          :key="slide.id"
          :slide="slide"
        />
      </Splide>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/assets/scss/variables';

.splider {
  &-slider {
    max-height: 420px;
    border-radius: 40px;
    overflow: hidden;
    @media (max-width: $md4 + px) {
      border-radius: 20px;
      max-height: 440px;
    }
  }
}

:deep(.splide__pagination) {
  position: absolute;
  left: 40px;
  bottom: 40px;
  gap: 8px;
  justify-content: flex-start;
  padding: 0;
  @media (max-width: $md4 + px) {
    left: 32px;
    bottom: 32px;
  }
}

:deep(.splide__pagination__page) {
  width: 20px;
  height: 4px;
  background: $bg-white-alpha-20;
  border-radius: 16px;
  margin: 0;
  opacity: 1;

  &.is-active {
    width: 60px;
    background: $bg-white;
    transform: scale(1);
  }

  @media (max-width: $md4 + px) {
    width: 14px;
    &.is-active {
      width: 44px;
    }
  }
}
</style>
