<script setup lang="ts">
import projectsCategories from '~/data/projectsCategories'
import solutions from '~/data/solutions'
import projects from '~/data/projects'
import type ProjectsCategory from '~/types/Projects/ProjectsCategory'
import type Project from '~/types/Projects/Project'
import type Solution from '~/types/Solution/Solution'

const route = useRoute()
const projectCategory = ref<ProjectsCategory>()
const projectsData = ref<Array<Project>>()
const solutionsData = ref<Array<Solution>>()

onMounted(() => {
  projectCategory.value = projectsCategories.find(
    (item) => item.id === +route.params.id
  )
  projectsData.value = projects.slice(0, 4)
  solutionsData.value = solutions.slice(0, 4)
})
</script>

<template>
  <div class="page">
    <div class="container">
      <Breadcrumbs />
      <section v-if="projectCategory" class="category">
        <PageDetailsHeader
          :title="projectCategory.title"
          :video="projectCategory.video"
          :description="projectCategory.description"
          btn-title="Обсудить проект"
          :subtitle="projectCategory.subtitle"
        />
      </section>
      <PageDetailsProjectsExamples
        v-if="projectsData"
        :examples="projectsData"
      />
      <PageDetailsCompleteSolutions
        v-if="solutionsData"
        :solutions="solutionsData"
      />
      <ConctactSection />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
