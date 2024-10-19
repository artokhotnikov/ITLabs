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
        <RecruiteProjectsMobileItem
          v-for="cat in sliced"
          :key="cat.id"
          v-model:active="active"
          :item="cat"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '@/assets/scss/mixins';

.projects {
  &-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: start;
    overflow-x: auto;
    gap: 8px;
    border-radius: 16px;
    @include no-scroll();
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
