<script setup>
import { Splide } from '@splidejs/vue-splide'

const splide = ref()
const options = {
  perPage: 1,
  arrows: false,
  autoplay: true,
  progress: true,
  type: 'loop',
  gap: 20
}
</script>

<template>
  <div class="splider">
    <div class="container">
      <Splide ref="splide" class="splider-slider" :options="options">
        <HomeSliderSlide v-for="n in 4" :key="n" />
      </Splide>
    </div>
  </div>
</template>

<style lang="scss">
@import '/assets/scss/variables';

.splider {
  position: relative;
  max-height: 418px;
  overflow: hidden;

  &-slider {
    border-radius: 40px;
    overflow: hidden;
  }
}

.splide__pagination {
  position: absolute;
  left: 40px;
  bottom: 40px;
  gap: 8px;
  justify-content: flex-start;
  padding: 0;
}

.splide__pagination__page {
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
}
</style>
