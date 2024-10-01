<script setup lang="ts">
import { useContentStore } from '~/store/contentStore'

const contentStore = useContentStore()
await useAsyncData('projectCategories', () =>
  contentStore.getProjectCategories()
)
await useAsyncData('projects', () => contentStore.getProjects())
await useAsyncData('homeSlides', () => contentStore.getHomeSlides())
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style scoped lang="scss"></style>
