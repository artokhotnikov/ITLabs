<script setup lang="ts">
import data from '~/data/solutions.ts'

const router = useRouter()
const isDark = useDark()
</script>

<template>
  <section class="section solutions">
    <div class="container">
      <div class="title">Решения</div>
      <div class="subtitle medium">
        Готовые продукты и приложения для вашего бизнеса
      </div>
      <div class="solutions-list">
        <HomeSolutionsItem
          v-for="solution in data"
          :key="solution.id"
          :item="solution"
          @click="router.push(`/solutions/${solution.id}`)"
        />
      </div>
      <ClientOnly>
        <Button
          class="solutions-btn"
          outline
          :color="isDark ? 'secondary' : 'primary'"
          @click="router.push('/solutions')"
        >
          Все решения
        </Button>
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.solutions {
  .container {
    position: relative;
  }

  .title {
    color: $text-blue;
    margin: 0 0 8px;
  }

  @media (max-width: $md3 + px) {
    .title,
    .subtitle {
      text-align: center;
    }
  }

  &-btn {
    width: 190px;
    @media (min-width: $md3 + px) {
      position: absolute;
      right: 32px;
      top: 36px;
    }
    @media (min-width: $md2 + px) {
      right: 0;
    }
    @media (max-width: $md3 + px) {
      margin: 32px auto 0;
    }
  }

  &-list {
    @include no-scroll;
    padding: 100px 0 0;
    display: flex;
    gap: 20px;
    @media (max-width: $md1 + px) {
      overflow-x: auto;
      max-width: 100%;
    }
  }
}

.dark .solutions {
  .subtitle {
    color: $text-white;
  }
}
</style>
