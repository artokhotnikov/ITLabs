<script setup lang="ts">
import { SplideSlide } from '@splidejs/vue-splide'
import type HomeSlide from '~/types/HomeSlide'
import { useModalsStore } from '~/store/modalsStore'

const { width } = useWindowSize()
const modalsStore = useModalsStore()

interface SlideProps {
  slide: HomeSlide
}

const props = defineProps<SlideProps>()

const slideVideo = ref<HTMLVideoElement>()
const sm = computed(() => width.value <= 768)

const onOpenModal = () => {
  modalsStore.open('specialist')
  setTimeout(() => {
    const formSpecialist: HTMLFormElement = document.querySelector(
      '#callSpecialistForm'
    )
    if (formSpecialist) {
      formSpecialist.dataset.title = props.slide.title
    }
  }, 1000)
}
</script>

<template>
  <SplideSlide>
    <div class="slide">
      <div class="slide-content">
        <div class="slide-background">
          <video
            ref="slideVideo"
            :src="slide.media"
            autoplay
            muted
            playsinline
            loop
          ></video>
        </div>
        <div class="text text-s medium">{{ slide.type }}</div>
        <h2 class="title title-s">{{ slide.title }}</h2>
        <div class="text text-md" v-html="slide.description" />
        <Button
          class="slide-btn"
          color="secondary"
          outline
          :small="sm"
          @click="onOpenModal"
        >
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
