<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'

interface DetailsHeaderProps {
  title?: string
  video?: string
  videoPoster?: string
  subtitle?: string
  description?: string
  btnTitle?: string
}

defineProps<DetailsHeaderProps>()
const emits = defineEmits(['onClick'])
</script>

<template>
  <h1
    v-if="title"
    class="details-title details-title-lg title title-s"
    v-html="title"
  />
  <div class="details-header">
    <div v-if="video" class="details-video">
      <video-player :src="video" :poster="videoPoster" controls fluid />
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
      <Button v-if="btnTitle" class="details-btn" @click="emits('onClick')">
        {{ btnTitle }}
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

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
  }

  &-video {
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
      }
    }
  }

  &-subtitle {
    color: $text-secondary;
    margin: 0 0 40px;
  }

  &-text {
    color: $text-third;
    @media (max-width: $md2 + px) {
      max-width: 600px;
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
</style>
