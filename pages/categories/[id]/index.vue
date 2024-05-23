<script setup lang="ts">
definePageMeta({
  title: 'Услуга'
})
useHead({
  title: 'Услуга'
})
import projectsCategories from '~/data/projectsCategories'
import projects from '~/data/projects'
import type ProjectsCategory from '~/types/Projects/ProjectsCategory'
import type Project from '~/types/Projects/Project'

const route = useRoute()
const projectCategory = ref<ProjectsCategory>()
const projectsData = ref<Array<Project>>()

onMounted(() => {
  projectCategory.value = projectsCategories.find(
    (item) => item.id === +route.params.id
  )
  projectsData.value = projects.slice(0, 4)
})
</script>

<template>
  <div class="page page-main">
    <div class="container">
      <Breadcrumbs />
      <section v-if="projectCategory" class="category">
        <PageDetailsHeader
          :title="projectCategory.title"
          :video="projectCategory.video"
          :video-poster="projectCategory.videoPoster"
          :description="projectCategory.description"
          btn-title="Консультация с экспертом"
          :subtitle="projectCategory.subtitle"
        />
        <section
          v-if="projectCategory.firstBlock"
          class="category-block section"
        >
          <h3 class="title title-xs">Основной функционал</h3>
          <div class="category-content" v-html="projectCategory.firstBlock" />
        </section>
        <section
          v-if="projectCategory.secondBlock"
          class="category-block section"
        >
          <h3 class="title title-xs">Дополнительные возможности</h3>
          <div class="category-content" v-html="projectCategory.secondBlock" />
        </section>
      </section>

      <PageDetailsProjectsExamples
        v-if="projectsData"
        :examples="projectsData"
      />
      <HomeStages />
      <HomePrices />
      <ConctactSection />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.dark {
  .category {
    &-block {
      .title {
        color: $text-white;
      }
    }
  }
}

.category {
  &-block {
    .title {
      color: $text-secondary;
      margin: 0 0 40px;
    }
  }

  &-content {
    color: $text-third;

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
</style>
