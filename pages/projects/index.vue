<script setup lang="ts">
import projects from '~/data/projects'

definePageMeta({
  title: 'Проекты'
})
useHead({
  title: 'Проекты'
})

const router = useRouter()
</script>

<template>
  <div class="page projects">
    <div class="container">
      <Breadcrumbs />
      <h1 class="projects-title title">Проекты</h1>
      <div class="projects-list">
        <ProjectsItem
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @on-click="router.push(`/projects/${project.id}`)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.projects {
  &-title {
    color: $text-blue;
    margin: 0 0 40px;
    @media (max-width: $md3 + px) {
      margin: 0 0 32px;
    }
  }
}

.projects-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: $md2 + px) {
    gap: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: $md3 + px) {
    grid-template-columns: 1fr;
  }
}

.project {
  width: 100%;
  max-width: 395px;

  &-content {
    max-width: 440px;
  }

  @media (max-width: $md1 + px) {
    max-width: 300px;
  }
  @media (max-width: $md2 + px) {
    max-width: 100% !important;
  }
}

.project:nth-child(5n + 2) {
  max-width: 293px;
  @media (max-width: $md1 + px) {
    max-width: 275px;
  }
}

.project:nth-child(5n + 3) {
  max-width: 500px;
  @media (max-width: $md1 + px) {
    max-width: 280px;
  }
}

.project:nth-child(5n + 4) {
  max-width: 500px;
  @media (max-width: $md1 + px) {
    max-width: 380px;
  }
}

.project:nth-child(5n + 5) {
  max-width: 708px;
  @media (max-width: $md1 + px) {
    max-width: 496px;
  }
}
</style>
