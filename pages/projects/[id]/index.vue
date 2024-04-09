<script setup lang="ts">
import type Project from '~/types/Projects/Project'
import projects from '~/data/projects'

definePageMeta({
  title: 'Проект'
})
useHead({
  title: 'Проект'
})

const route = useRoute()

const project = ref<Project>()

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
  }

  &-title {
    margin: 40px 0 0;
    color: $text-blue;
    @media (max-width: $md3 + px) {
      margin: 64px 0 0;
    }
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
</style>
