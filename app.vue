<script setup lang="ts">
import { useContentStore } from '~/store/contentStore'

const contentStore = useContentStore()
onMounted(() => nextTick(() => contentStore.init()))
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style scoped lang="scss"></style>
