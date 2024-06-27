<script setup>
import { SplideSlide } from '@splidejs/vue-splide'

const { width } = useWindowSize()

const sm = computed(() => width.value <= 768)
</script>

<template>
  <SplideSlide>
    <div class="slide">
      <div class="slide-content">
        <div class="slide-background">
          <!--          <video-->
          <!--            src="/assets/img/slide.mp4"-->
          <!--            muted-->
          <!--            loop-->
          <!--            autoplay-->
          <!--            playsinline-->
          <!--          ></video>-->
        </div>
        <div class="text text-s medium">Desktop / Web</div>
        <h2 class="title title-s">ПО для интерактивного оборудования</h2>
        <div class="text text-md">
          Индивидуальная разработка и готовые решения для всех видов
          интерактивных устройств
        </div>
        <Button class="slide-btn" color="secondary" outline :small="sm">
          Рассчитать стоимость
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
  position: relative;

  @media (max-width: $md4 + px) {
    padding: 64px 32px;
    height: 440px;
    display: flex;
    align-items: flex-end;
    border-radius: 20px;
  }

  &-background {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    video {
      object-fit: cover;
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }

  .text {
    &-s {
      text-transform: uppercase;
    }
  }

  .title {
    margin: 16px 0;
    @media (max-width: $md4 + px) {
      margin: 8px 0;
    }
  }

  &-content {
    max-width: 460px;
    @media (max-width: $md2 + px) {
      max-width: 370px;
    }
  }

  &-btn {
    margin: 40px 0 0;
    width: 250px;
    @media (max-width: $md4 + px) {
      margin: 32px 0 0;
      width: 190px;
    }
  }
}
</style>
