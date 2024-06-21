<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import { useContentStore } from '~/store/contentStore'
import { useModalsStore } from '~/store/modalsStore'
import type GalleryItem from '~/types/GalleryItem'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

interface DetailsHeaderProps {
  title?: string
  video?: string
  videoPoster?: string
  subtitle?: string
  description?: string
  btnTitle?: string
  images?: GalleryItem[]
}

defineProps<DetailsHeaderProps>()
const emits = defineEmits(['onClick'])
const { URL } = useContentStore()

const modalsStore = useModalsStore()

const onOpenModal = () => {
  modalsStore.open('specialist')
}
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
  <h1
    v-if="title"
    class="details-title details-title-lg title title-s"
    v-html="title"
  />
  <div class="details-header">
    <div v-if="images?.length" class="details-images">
      <Splide ref="splide" class="splider-slider" :options="options">
        <SplideSlide v-for="slide in images" :key="slide.id">
          <div class="slide">
            <img :src="URL + slide.image" alt="Image" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div v-if="video && !images?.length" class="details-video">
      <video-player
        :src="URL + video"
        :poster="URL + videoPoster"
        controls
        fluid
      />
    </div>
    <div class="details-description">
      <h1
        v-if="title"
        class="details-title details-title-md title title-s"
        v-html="title"
      />
      <div v-if="subtitle" class="details-subtitle text bold">
        {{ subtitle }}
      </div>
      <div
        v-if="description"
        class="details-text text text-md"
        v-html="description"
      />
      <Button v-if="btnTitle" class="details-btn" @click="onOpenModal">
        {{ btnTitle }}
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.dark {
  .details {
    &-subtitle {
      color: $text-white;
    }
  }
}

.details {
  &-header {
    display: flex;
    gap: 64px;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: $md2 + px) {
      flex-direction: column;
    }
    @media (max-width: $md3 + px) {
      gap: 40px;
    }
  }

  &-video,
  &-images {
    border-radius: 16px;
    overflow: hidden;
    position: relative;

    @media (min-width: $md2 + px) {
      flex: 0 1 604px;
    }

    @media (max-width: $md2 + px) {
      border-radius: 20px;
      width: 100%;
    }
    @media (max-width: $md4 + px) {
      border-radius: 8px;
    }
  }

  &-images {
    @media (min-width: $md2 + px) {
      flex: 1 1 604px;
    }
  }

  &-description {
    @media (min-width: $md2 + px) {
      flex: 0 1 395px;
    }
    @media (max-width: $md2 + px) {
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: $md4 + px) {
      text-align: left;
    }
  }

  &-title {
    color: $text-blue;

    &-lg {
      display: none;
      @media (min-width: $md2 + px) {
        display: block;
        margin: 0 0 40px;
      }
    }

    &-md {
      display: none;
      @media (max-width: $md2 + px) {
        display: block;
        margin: 0 0 12px;
      }
    }
  }

  &-subtitle {
    color: $text-secondary;
    margin: 0 0 40px;
    @media (max-width: $md3 + px) {
      margin: 0 0 24px;
    }
  }

  &-text {
    color: $text-third;
    @media (max-width: $md2 + px) {
      max-width: 600px;
      margin: 0 auto;
    }
  }

  &-btn {
    margin: 40px 0 0;
    max-width: 290px;
    width: 100%;
    @media (max-width: $md2 + px) {
      margin: 40px auto 0;
    }
    @media (max-width: $md4 + px) {
      margin: 40px 0 0;
      max-width: 100%;
    }
  }
}

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

.slide {
  max-height: 420px;
  text-align: center;
  overflow: hidden;
  height: 100%;
  @media (max-width: $md4 + px) {
    max-height: 440px;
  }

  img {
    border-radius: 40px;
    max-width: 100%;
    max-height: 100%;
    aspect-ratio: 16/9;
    @media (max-width: $md4 + px) {
      border-radius: 20px;
    }
  }
}
</style>
