<script setup lang="ts">
import { useContentStore } from '~/store/contentStore'

const active = ref(0)
const router = useRouter()
const contentStore = useContentStore()
const sliced = computed(() => contentStore.projects.slice(0, 4))
</script>

<template>
  <section v-if="contentStore.projects.length" class="section projects">
    <div class="container">
      <div class="projects-list">
        <RecruiteProjectsItem
          v-for="(cat, idx) in sliced"
          :key="cat.id"
          v-model:active="active"
          :item="cat"
          :idx="idx"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.projects {
  &-list {
    display: flex;
    gap: 20px;
    height: 400px;
    justify-content: start;
    padding-right: 104px;
    position: relative;
    @media (max-width: 959px) {
      flex-direction: column;
      height: auto;
      padding: 0;
    }
  }

  &-btn {
    @media (min-width: 960px) {
      transform: rotate(-90deg) translate(-158px, 158px);
      position: absolute !important;
      top: 0;
      right: 0;
      width: 400px;
      height: 84px;
      border-radius: 40px;
    }
  }

  .title {
    color: $text-blue;
    text-align: center;
    margin: 0 0 40px;
    @media (max-width: $md3 + px) {
      margin: 0 0 32px;
    }
  }
}
</style>
