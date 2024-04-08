<script setup lang="ts">
import type Project from '~/types/Projects/Project'

interface ProjectsExamples {
  examples: Array<Project>
}

defineProps<ProjectsExamples>()

const router = useRouter()
const small = ref(false)

onMounted(() => {
  small.value = window.innerWidth < 540
})
</script>

<template>
  <section class="examples section-md">
    <h3 class="examples-title title title-s">Примеры работ</h3>
    <div class="examples-list">
      <ProjectsItem
        v-for="example in examples"
        :key="example.id"
        :project="example"
        :small="small"
        class="example"
        @on-click="router.push(`/projects/${example.id}`)"
      />
    </div>
    <Button class="examples-btn" outline @click="router.push('/projects')">
      Больше проектов
    </Button>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.examples {
  position: relative;

  &-title {
    color: $text-secondary;
    margin: 0 0 50px;
    @media (max-width: $md3 + px) {
      margin: 0 0 32px;
      text-align: center;
    }
  }

  &-list {
    @include no-scroll;
    display: flex;
    gap: 20px;
    overflow: auto;
    max-width: 100%;
    @media (max-width: $md3 + px) {
      gap: 16px;
    }
  }

  &-btn {
    width: 215px;

    @media (min-width: $md3 + px) {
      position: absolute;
      right: 0;
      top: 40px;
    }
    @media (max-width: $md3 + px) {
      margin: 32px auto 0;
    }
  }
}

.example {
  flex: 1 1 20%;
  max-width: 25%;
  @media (max-width: $md1 + px) {
    flex: 1 0 30%;
    max-width: 33%;
  }
  @media (max-width: $md3 + px) {
    flex-basis: 50%;
    max-width: 50%;
  }
}
</style>
