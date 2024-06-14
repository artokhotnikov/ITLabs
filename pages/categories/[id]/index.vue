<script setup lang="ts">
import { useContentStore } from '~/store/contentStore'

const title = ref('Услуга')
definePageMeta({
  title: 'Услуга'
})
useHead({
  title
})
import type ProjectsCategory from '~/types/Projects/ProjectsCategory'
import type Project from '~/types/Projects/Project'

const contentStore = useContentStore()
const breadcrumbs = ref([
  {
    title: 'Услуги',
    path: 'categories'
  }
])

const route = useRoute()
const projectCategory = ref<ProjectsCategory>()
const projectsData = ref<Array<Project>>([])

onMounted(async () => {
  await nextTick(async () => {
    projectCategory.value = await contentStore.getProjectCategory(
      +route.params.id
    )
    if ('title' in projectCategory.value) {
      title.value = projectCategory.value.title
      breadcrumbs.value.push({
        title: projectCategory.value.title,
        path: `categories/${route.params.id}`
      })
    }
  })
  if (projectCategory.value?.projects) {
    projectsData.value = projectCategory.value?.projects.slice(0, 4)
  }
})
</script>

<template>
  <div class="page page-main">
    <div class="container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <section v-if="projectCategory" class="category">
        <ClientOnly>
          <PageDetailsHeader
            :title="projectCategory.title"
            :video="projectCategory.video"
            :video-poster="projectCategory.videoPoster"
            :description="projectCategory.description"
            btn-title="Консультация с экспертом"
            :subtitle="projectCategory.subtitle"
          />
        </ClientOnly>
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
        v-if="projectsData.length"
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
