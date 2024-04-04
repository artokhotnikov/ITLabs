<script setup>
import { SplideSlide } from '@splidejs/vue-splide'
</script>

<template>
  <SplideSlide>
    <div class="slide">
      <div class="slide-content">
        <div class="text text-s medium">Desktop / Web</div>
        <h2 class="title title-s">ПО для интерактивного оборудования</h2>
        <div class="text text-md">
          Индивидуальная разработка и готовые решения для всех видов
          интерактивных устройств
        </div>
        <Button class="slide-btn" color="secondary" outline
          >Рассчитать стоимость
        </Button>
      </div>
    </div>
  </SplideSlide>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.slide {
  padding: 56px 40px 84px;
  border-radius: 40px;
  color: $text-white;
  background: $bg-blue url('/assets/img/home_slider/slide1.gif') center / cover
    no-repeat;

  .text {
    &-s {
      text-transform: uppercase;
    }

    &-medium {
    }
  }

  .title {
    margin: 16px 0;
  }

  &-content {
    max-width: 460px;
  }

  &-btn {
    margin: 40px 0 0;
    width: 250px;
  }
}
</style>
