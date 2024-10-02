<script setup lang="ts">
import { useContentStore } from '~/store/contentStore'
import type ProjectsCategory from '~/types/Projects/ProjectsCategory'

const title = ref()

const projectCategory = ref<ProjectsCategory>({})
const contentStore = useContentStore()

const route = useRoute()
const slug = route.params.slug
const { data } = await useAsyncData<ProjectsCategory>('projectCategory', () =>
  contentStore.getProjectCategoryBySlug(slug)
)

projectCategory.value = data.value!
title.value = projectCategory.value.title!
const breadcrumbs = [
  {
    title: 'Услуги',
    path: 'categories'
  },
  { title: title.value, path: `categories/${slug}` }
]
useHead({
  title
})
</script>

<template>
  <div class="page page-main">
    <div class="container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <section v-if="projectCategory" class="category">
        <PageDetailsHeader
          :title="projectCategory.title"
          :video="projectCategory.video"
          :video-poster="projectCategory.videoPoster"
          :description="projectCategory.description"
          btn-title="Консультация с экспертом"
          :subtitle="projectCategory.subtitle"
          :images="projectCategory.images"
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
        v-if="projectCategory.projects"
        :examples="projectCategory.projects.slice(0, 4)"
      />
    </div>
    <HomeStages />
    <HomePrices />
    <ConctactSection />
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
    line-height: 1.2;

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
