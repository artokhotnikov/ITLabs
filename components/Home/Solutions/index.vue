<script setup lang="ts">
const data = [
  {
    id: 1,
    title: 'Интерактивная <br> Навигация',
    list: [
      'Построение маршрутов',
      'Информация об объектах',
      'Рекламный контент',
    ],
    to: '/',
    image: '/img/home_solutions/navigation.png',
  },
  {
    id: 2,
    title: 'Электронная <br> очередь',
    list: [
      'Выдача талонов с временем, датой и номером кабинета',
      'Рекламный контент',
    ],
    to: '/',
    image: '/img/home_solutions/query.png',
  },
  {
    id: 3,
    title: 'Кассы <br> самообслуживания',
    list: [
      'Продажа билетов на мероприятия и аттракционы',
      'Сбор и обработка данных пользователей',
      'Рекламный контент',
    ],
    to: '/',
    image: '/img/home_solutions/cash.png',
  },
  {
    id: 4,
    title: 'Виртуальная <br> примерочная',
    list: [
      'Виртуальная примерка костюмов при помощи технологии kinect',
      'Информация об объектах',
      'Сбор и обработка данных пользователей',
    ],
    to: '/',
    image: '/img/home_solutions/fitting.png',
  },
]
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
        <Button class="solutions-btn" outline>Все решения</Button>
      </div>
      <div class="solutions-list">
        <HomeSolutionsItem v-for="cat in data" :key="cat.id" :item="cat" />
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
