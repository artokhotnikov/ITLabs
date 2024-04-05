<script setup lang="ts">
import data from '~/data/solutions.ts'
const router = useRouter()
</script>

<template>
  <section class="section solutions">
    <div class="container">
      <div class="solutions-header">
        <div class="solutions-content">
          <div class="title">Решения</div>
          <div class="subtitle medium">
            Готовые продукты и приложения для вашего бизнеса
          </div>
        </div>
        <Button
          class="solutions-btn"
          outline
          @click="router.push('/solutions')"
        >
          Все решения
        </Button>
      </div>
      <div class="solutions-list">
        <HomeSolutionsItem
          v-for="solution in data"
          :key="solution.id"
          :item="solution"
          @click="router.push(`/solutions/${solution.id}`)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.solutions {
  .title {
    color: $text-blue;
    margin: 0 0 8px;
  }

  &-btn {
    width: 190px;
  }

  &-header {
    display: flex;
    align-items: flex-end;
    gap: 32px;
    justify-content: space-between;
  }

  &-content {
  }

  &-list {
    margin: 100px 0 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}
</style>
