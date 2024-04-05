<script setup lang="ts">
definePageMeta({
  title: 'Решения'
})
useHead({
  title: 'Решения'
})
</script>

<template>
  <div class="page">
    <div class="container">
      <Breadcrumbs />
      <h1 class="title">Решения</h1>
      <div class="subtitle">
        Готовые продукты и приложения для вашего бизнеса
      </div>
      <div class="page-list">
        <!--        <div class="item">-->
        <!--          <div class="item-img">-->
        <!--            <NuxtImg :src="item.image" loading="lazy" />-->
        <!--          </div>-->
        <!--          <div class="title title-s">-->
        <!--            {{ item.title }}-->
        <!--          </div>-->
        <!--          <ul class="ul ul-disc">-->
        <!--            <li v-for="text in item.list" :key="text" class="text text-md">-->
        <!--              {{ text }}-->
        <!--            </li>-->
        <!--          </ul>-->
        <!--          <Button class="item-btn">Подробнее</Button>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
