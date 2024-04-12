<script setup lang="ts">
import data from '~/data/solutions'
import type Solution from '~/types/Solution/Solution'
import projects from '~/data/projects'
import type Project from '~/types/Projects/Project'

const route = useRoute()
const router = useRouter()
const solution = ref<Solution>()
const projectsData = ref<Array<Project>>()

onMounted(() => {
  solution.value = data.find((item) => item.id === +route.params.id)
  projectsData.value = projects.slice(0, 4)
})
</script>

<template>
  <div class="page">
    <div class="container">
      <Breadcrumbs />
      <section v-if="solution" class="solution">
        <PageDetailsHeader
          :title="solution.title"
          :video="solution.video"
          :description="solution.mainDescription"
          btn-title="Консультация с экспертом"
          :subtitle="solution.subtitle"
        />
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
        <PageDetailsProjectsExamples :examples="projectsData" />
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
    @media (max-width: $md3 + px) {
      text-align: center;
    }
  }

  &-functionality {
    .ul {
      flex-wrap: wrap;
      max-height: 290px;
      gap: 8px 40px;
      @media (max-width: $md1 + px) {
        max-height: 360px;
      }
      @media (max-width: $md2 + px) {
        max-height: 50vw;
      }
      @media (max-width: $md3 + px) {
        max-height: 100%;
      }

      li {
        max-width: 50%;
        @media (max-width: $md2 + px) {
          max-width: 40%;
        }
        @media (max-width: $md3 + px) {
          max-width: 100%;
        }
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
