<script setup lang="ts">
import type Project from '~/types/Projects/Project'

interface ProjectsExamples {
  examples: Array<Project>
}

defineProps<ProjectsExamples>()

const isDark = useDark()
const { width } = useWindowSize()
const router = useRouter()
const small = computed(() => width.value <= 768)
</script>

<template>
  <section class="examples section-md">
    <h3 class="examples-title title title-s">Примеры работ</h3>
    <div class="examples-list">
      <ClientOnly>
        <ProjectsItem
          v-for="example in examples"
          :key="example.id"
          :project="example"
          :small="small"
          class="example"
          @on-click="router.push(`/projects/${example.slug}`)"
        />
        <template #fallback>
          <div class="example" v-for="i in 4" :key="i">
            <Skeleton />
          </div>
        </template>
      </ClientOnly>
    </div>
    <ClientOnly>
      <Button
        class="examples-btn"
        outline
        :color="isDark ? 'secondary' : 'primary'"
        @click="router.push('/projects')"
      >
        Больше проектов
      </Button>
    </ClientOnly>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.dark {
  .examples {
    &-title {
      color: $text-white;
    }
  }
}

.examples {
  position: relative;

  &-title {
    color: $text-secondary;
    margin: 0 0 50px;
    @media (max-width: ($md3 + px)) {
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
    @media (max-width: ($md3 + px)) {
      gap: 16px;
    }
  }

  &-btn {
    width: 215px;

    @media (min-width: ($md3 + px)) {
      position: absolute;
      right: 0;
      top: 40px;
    }
    @media (max-width: ($md3 + px)) {
      margin: 32px auto 0;
    }
  }
}

.example {
  flex: 1 1 20%;
  max-width: 25%;
  min-height: 330px;

  @media (max-width: ($md1 + px)) {
    flex: 1 0 40%;
    max-width: 40%;
  }
  @media (max-width: ($md3 + px)) {
    flex-basis: 80%;
    max-width: 80%;
  }
}
</style>
