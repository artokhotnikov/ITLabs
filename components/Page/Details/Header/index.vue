<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import { useContentStore } from '~/store/contentStore'
import { useModalsStore } from '~/store/modalsStore'
import type GalleryItem from '~/types/GalleryItem'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'

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
const { isOpen, open } = useOpen()
const currentViewIndex = ref(0)

const onOpenModal = () => {
  modalsStore.open('specialist')
}
const openView = (index: number) => {
  currentViewIndex.value = index
  open()
}
const options = {
  perPage: 1,
  arrows: true,
  autoplay: true,
  pagination: false,
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
      <Splide
        ref="splide"
        class="splider-slider"
        :options="options"
        :has-track="false"
      >
        <SplideTrack>
          <SplideSlide v-for="(slide, index) in images" :key="slide.id">
            <div class="slide" @click="openView(index)">
              <img :src="URL + slide.media" alt="Image" />
            </div>
          </SplideSlide>
        </SplideTrack>
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">
            <IconsArrowLeft />
          </button>
          <button class="splide__arrow splide__arrow--next">
            <IconsArrowRight />
          </button>
        </div>
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
    <transition name="fade">
      <GalleryModal
        v-if="isOpen && images?.length"
        v-model:is-active="isOpen"
        :index="currentViewIndex"
        :gallery="images"
      />
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

::v-deep(.vjs-big-play-button) {
  @include centerPositionAbsolute();
}
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
    @media (max-width: $md2 + px) {
      max-width: 750px;
      margin: 0 auto;
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

.slide {
  max-height: 420px;
  text-align: center;
  overflow: hidden;
  height: 100%;
  cursor: pointer;
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

.splide__arrow {
  width: 36px;
  height: 36px;
  color: $text-white;
  background: $bg-dark;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &[disabled] {
    color: $text-white-alpha;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  &--prev {
    left: 0;
  }

  &--next {
    right: 0;
  }
}
</style>
