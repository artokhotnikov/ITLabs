<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import type GalleryItem from '~/types/GalleryItem'
import { useContentStore } from '~/store/contentStore'

interface GalleryModalProps {
  gallery: GalleryItem[]
  isActive: boolean
  index: number
}

interface GalleryModalPropsEmits {
  (eventName: 'update:isActive', value: boolean): void
}

const emits = defineEmits<GalleryModalPropsEmits>()
const props = defineProps<GalleryModalProps>()

const { lock, unlock } = useBodyLock()
const currentView = ref('')
const currentViewIndex = ref(0)
const { URL } = useContentStore()

const closeView = () => {
  currentView.value = ''
  currentViewIndex.value = 0
  emits('update:isActive', false)
}
const nextView = () => {
  if (currentViewIndex.value + 1 === props.gallery.length) return
  currentViewIndex.value = currentViewIndex.value + 1
  currentView.value = props.gallery[currentViewIndex.value].media
}
const prevView = () => {
  if (currentViewIndex.value === 0) return
  currentViewIndex.value = currentViewIndex.value - 1
  currentView.value = props.gallery[currentViewIndex.value].media
}

const isVideoSlide = (slidePath: string): boolean => slidePath.includes('.mp4')

onMounted(() => {
  currentViewIndex.value = props.index
  currentView.value = props.gallery[currentViewIndex.value].media
  lock()
})

onUnmounted(() => {
  unlock()
})
</script>

<template>
  <div class="view modal">
    <div class="view-close" @click="closeView">
      <IconsClose />
    </div>
    <div v-if="currentView.length" class="view-content">
      <video-player
        v-if="isVideoSlide(currentView)"
        :src="URL + currentView"
        controls
        fluid
      />
      <img v-else :src="URL + currentView" loading="lazy" alt="Результат" />
    </div>
    <div class="view-controls">
      <button class="view-arrow view-arrow-prev" @click="prevView">
        <IconsArrowLeft />
      </button>
      <button class="view-arrow view-arrow-next" @click="nextView">
        <IconsArrowRight />
      </button>
    </div>
    <PageOverlay />
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.view {
  position: fixed;
  inset: 0;
  z-index: 6;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &-close {
    position: absolute;
    top: 40px;
    right: 40px;
    cursor: pointer;
    z-index: 6;

    svg {
      width: 36px;
      height: 36px;
    }

    @media (max-width: $md3 + px) {
      width: 32px;
      height: 32px;
      top: 20px;
      right: 20px;
      svg {
        width: 32px;
        height: 32px;
      }
    }
  }

  &-content {
    max-width: 1600px;
    width: 100%;
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 6;
    @media (max-width: $md3 + px) {
      aspect-ratio: 9/16;
      max-height: 100dvh;
    }

    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media (max-width: $md3 + px) {
      img,
      video {
        height: auto;
        max-height: 100dvh;
      }
    }
  }

  &-arrow {
    width: 64px;
    height: 64px;
    background: $bg-white-alpha-20;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 6;
    @media (max-width: $md3 + px) {
      width: 32px;
      height: 32px;
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  &-arrow-prev {
    left: 40px;
    @media (max-width: $md3 + px) {
      left: 10px;
    }
  }

  &-arrow-next {
    right: 40px;
    @media (max-width: $md3 + px) {
      right: 10px;
    }
  }
}
</style>
