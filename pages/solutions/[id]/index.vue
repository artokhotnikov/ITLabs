<script setup lang="ts">
import data from '~/data/solutions'
import type Solution from '~/types/Solution/Solution'
import { useModalsStore } from '~/store/modalsStore'

const modalsStore = useModalsStore()
const route = useRoute()
const router = useRouter()
const solution = ref<Solution>()

onMounted(() => {
  solution.value = data.find((item) => item.id === +route.params.id)
})
</script>

<template>
  <div class="page">
    <div class="container">
      <Breadcrumbs />
      <section v-if="solution" class="solution">
        <div class="solution-header section-md">
          <div class="solution-video">
            <video :src="solution.video" controls></video>
          </div>
          <div class="solution-description">
            <h1 class="solution-title title title-s" v-html="solution.title" />
            <div class="solution-subtitle text bold">
              {{ solution.subtitle }}
            </div>
            <div
              class="solution-text text text-md"
              v-html="solution.mainDescription"
            />
            <Button
              class="solution-btn"
              @click="modalsStore.open('discussionDiscussion')"
            >
              Консультация с экспертом
            </Button>
          </div>
        </div>
        <div class="solution-functionality section-md">
          <h4 class="solution-category title title-xs">Основной функционал</h4>
          <ul class="ul ul-disc">
            <li
              v-for="string in solution.mainFunctionality"
              :key="string"
              class="text text-md"
            >
              {{ string }}
            </li>
          </ul>
        </div>
        <div class="solution-features section-md">
          <h4 class="solution-category title title-xs">
            Дополнительные возможности
          </h4>
          <ul class="ul ul-disc">
            <li
              v-for="string in solution.additionalFeatures"
              :key="string"
              class="text text-md"
            >
              {{ string }}
            </li>
          </ul>
        </div>
        <div class="solution-gallery gallery section-md">
          <h3 class="gallery-title title title-s">Примеры работ</h3>
          <div class="gallery-list">
            <div
              v-for="image in solution.images"
              :key="image"
              class="gallery-img"
            >
              <NuxtImg :src="image" />
            </div>
          </div>
          <Button class="gallery-btn" outline @click="router.push('/projects')">
            Больше проектов
          </Button>
        </div>
      </section>
    </div>
    <ConctactSection />
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/mixins';

.solution {
  &-header {
    display: flex;
    gap: 64px;
    justify-content: space-between;
    align-items: flex-start;
  }

  &-video {
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    padding-top: 28%;

    @media (min-width: $md2 + px) {
      flex: 0 1 604px;
    }

    video {
      position: absolute;
      inset: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &-description {
    @media (min-width: $md2 + px) {
      flex: 0 1 385px;
    }
  }

  &-title {
    color: $text-blue;
    margin: 0 0 8px;
  }

  &-subtitle {
    color: $text-secondary;
    margin: 0 0 40px;
  }

  &-text {
    color: $text-third;
    line-height: 130%;
  }

  &-btn {
    margin: 40px 0 0;
    max-width: 290px;
    width: 100%;
  }

  &-category {
    color: $text-secondary;
    margin: 0 0 40px;
  }

  &-functionality {
    .ul {
      flex-wrap: wrap;
      max-height: 270px;
      gap: 8px 40px;

      li {
        max-width: 50%;
      }
    }
  }

  &-features {
  }

  &-gallery {
  }
}

.ul {
  color: $text-third;

  &-disc {
  }
}

.gallery {
  position: relative;

  &-title {
    color: $text-secondary;
    margin: 0 0 50px;
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  &-img {
    @include img;
  }

  &-btn {
    width: 215px;
    @media (min-width: $md3 + px) {
      position: absolute;
      right: 0;
      top: 40px;
    }
  }
}
</style>
