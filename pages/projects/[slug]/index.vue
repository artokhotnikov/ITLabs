<script setup lang="ts">
import type Project from '~/types/Projects/Project'
import projects from '~/data/projects'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import { useContentStore } from '~/store/contentStore'

const title = ref('Проект')
definePageMeta({
  title: 'Проект'
})
useHead({
  title
})

const breadcrumbs = ref([
  {
    title: 'Проекты',
    path: 'projects'
  }
])

const contentStore = useContentStore()
const { isOpen, open } = useOpen()
const route = useRoute()
const project = ref<Project>()
const currentViewIndex = ref(0)
const openView = (index: number) => {
  if (!project.value) return
  currentViewIndex.value = index
  open()
}
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

const isVideoSlide = (slidePath: string): boolean =>
  slidePath.includes('.mp4') || slidePath.includes('.webm')

onMounted(async () => {
  await nextTick(async () => {
    project.value = await contentStore.getProjectBySlug(route.params.slug)
    if ('title' in project.value) {
      title.value = project.value.title
      breadcrumbs.value.push({
        title: project.value.title,
        path: `projects/${route.params.slug}`
      })
    }
  })
  // project.value = projects.find((pr) => pr.id === +route.params.id)
})
</script>

<template>
  <div class="page">
    <div class="container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <section v-if="project" class="project">
        <div class="project-img">
          <img
            :src="contentStore.URL + project.imageMain"
            :alt="project.title"
          />
        </div>
        <div v-if="project.subtitle" class="project-subtitle subtitle bold">
          {{ project.subtitle }}
        </div>
        <div
          v-if="project.taskRight || project.taskLeft"
          class="project-section"
        >
          <h2 class="project-title title title-s">Задача</h2>
          <div class="project-content">
            <div
              v-if="project.taskLeft"
              class="text text-md"
              v-html="project.taskLeft"
            />
            <div
              v-if="project.taskRight"
              class="text text-md"
              v-html="project.taskRight"
            />
          </div>
        </div>
        <div
          v-if="project.solutionLeft || project.solutionRight"
          class="project-section"
        >
          <h2 class="project-title title title-s">Решение</h2>
          <div
            v-if="project.solutionSubtitle"
            class="project-subtitle text bold"
            v-html="project.solutionSubtitle"
          />
          <div class="project-content">
            <div
              v-if="project.solutionLeft"
              class="project-side"
              v-html="project.solutionLeft"
            />
            <div
              v-if="project.solutionRight"
              class="project-side"
              v-html="project.solutionRight"
            />
          </div>
        </div>
        <ClientOnly>
          <div v-if="project.resultGallery?.length" class="project-section">
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
                    v-for="(slide, index) in project.resultGallery"
                    :key="slide"
                  >
                    <div class="slide" @click="openView(index)">
                      <div v-if="isVideoSlide(slide.media)" class="slide-video">
                        <img
                          :src="contentStore.URL + slide.image"
                          alt="Результат"
                        />
                        <div class="slide-icon">
                          <IconsPlay />
                        </div>
                      </div>
                      <div v-else class="slide-photo">
                        <img
                          :src="contentStore.URL + slide.media"
                          alt="Результат"
                        />
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
            <transition name="fade">
              <GalleryModal
                v-if="isOpen && project.resultGallery?.length"
                v-model:is-active="isOpen"
                :index="currentViewIndex"
                :gallery="project.resultGallery"
              />
            </transition>
          </div>
        </ClientOnly>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.dark {
  .project {
    &-subtitle {
      color: $text-white;
    }
  }
}

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

  &-side {
    line-height: 130%;

    :deep(ul) {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-left: 20px;

      li {
        list-style: disc;
      }
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
    max-width: 1200px;
    width: 100%;
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;
    justify-content: center;
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
