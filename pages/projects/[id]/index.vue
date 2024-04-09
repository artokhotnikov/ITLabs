<script setup lang="ts">
import type Project from '~/types/Projects/Project'
import projects from '~/data/projects'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'

definePageMeta({
  title: 'Проект'
})
useHead({
  title: 'Проект'
})

const route = useRoute()
const project = ref<Project>()
const options = {
  perPage: 4,
  arrows: true,
  pagination: false,
  gap: 20,
  breakpoints: {
    1260: {
      perPage: 4
    },
    768: {
      perPage: 3
    },
    540: {
      perPage: 1,
      padding: { left: 0, right: 90 },
      type: 'loop'
    }
  }
}

const isVideoSlide = (slidePath: string): boolean => slidePath.includes('.mp4')

onMounted(() => {
  project.value = projects.find((pr) => pr.id === +route.params.id)
})
</script>

<template>
  <div class="page">
    <div class="container">
      <Breadcrumbs />
      <section v-if="project" class="project">
        <div class="project-img">
          <NuxtImg :src="project.imageMain" sizes="100vw md:900px xl: 820px" />
        </div>
        <div class="project-subtitle subtitle bold">
          {{ project.subtitle }}
        </div>
        <div class="project-section">
          <h2 class="project-title title title-s">Задача</h2>
          <div class="project-content">
            <div class="text text-md" v-html="project.taskLeft" />
            <div class="text text-md" v-html="project.taskRight" />
          </div>
        </div>
        <div class="project-section">
          <h2 class="project-title title title-s">Решение</h2>
          <div class="project-subtitle text bold">
            {{ project.solutionSubtitle }}
          </div>
          <div class="project-content">
            <ul class="ul ul-disc">
              <li
                v-for="li in project.solutionLeft"
                :key="li"
                class="text text-md"
              >
                {{ li }}
              </li>
            </ul>
            <ul class="ul ul-disc">
              <li
                v-for="li in project.solutionRight"
                :key="li"
                class="text text-md"
              >
                {{ li }}
              </li>
            </ul>
          </div>
        </div>
        <ClientOnly>
          <div class="project-section">
            <div class="gallery">
              <h2 class="gallery-title title title-s">Результат</h2>
              <Splide
                ref="splide"
                class="splider"
                :options="options"
                :has-track="false"
              >
                <SplideTrack>
                  <SplideSlide
                    v-for="slide in project.resultGallery"
                    :key="slide"
                  >
                    <div class="slide">
                      <div v-if="isVideoSlide(slide)" class="slide-video">
                        <video :src="slide" no-contorls></video>
                        <div class="slide-icon">
                          <IconsPlay />
                        </div>
                      </div>
                      <div v-else class="slide-photo">
                        <NuxtImg :src="slide" sizes="178px" />
                        <div class="slide-icon">
                          <IconsEye />
                        </div>
                      </div>
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
          </div>
        </ClientOnly>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.project {
  @media (min-width: $md1 + px) {
    max-width: 812px;
    margin: 0 auto;
  }

  &-img {
    @include img;
    @media (max-width: $md3 + px) {
      & + .project-subtitle {
        text-transform: uppercase;
      }
    }
  }

  &-subtitle {
    margin: 40px 0 0;
    color: $text-secondary;
    @media (max-width: $md3 + px) {
      margin: 32px 0 0;
    }
  }

  &-section {
    margin: 40px 0 0;
    @media (max-width: $md3 + px) {
      margin: 64px 0 0;
    }
  }

  &-title {
    color: $text-blue;
  }

  &-content {
    color: $text-third;
    margin: 40px 0 0;
    display: flex;
    gap: 20px;

    > * {
      flex-basis: 50%;
    }

    @media (max-width: $md3 + px) {
      margin: 32px 0 0;
      flex-direction: column;
      gap: 16px;
    }
  }
}

.gallery {
  padding: 20px;
  border-radius: 20px;
  background: $text-secondary;
  color: $text-white;

  &-title {
    margin: 0 0 20px;
  }
}

.splider {
  border-radius: 20px;
  overflow: hidden;
}

.slide {
  @include ibg;
  width: 178px;
  aspect-ratio: 1 / 1;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: $md1 + px) {
    width: 199px;
  }
  @media (max-width: $md2 + px) {
    width: 100%;
  }

  &-video {
    video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .slide-icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $bg-white-alpha-20;
    }
  }

  &-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  &-photo,
  &-video {
    position: absolute;
    inset: 0;
  }

  @media (min-width: $md2 + px) {
    &:hover {
      .slide-photo:before,
      .slide-video:before,
      .slide-icon {
        opacity: 1;
      }
    }
    .slide-photo:before,
    .slide-video:before {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: rgba(45, 55, 68, 0.7);
      display: block;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 20px;
    }
    .slide-icon {
      z-index: 2;
    }
  }
}

.splide__arrow {
  width: 36px;
  height: 36px;
  color: $text-white;
  background: $bg-white-alpha-20;
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
    left: 10px;
  }

  &--next {
    right: 10px;
  }
}
</style>
