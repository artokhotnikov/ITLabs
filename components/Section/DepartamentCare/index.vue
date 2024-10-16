<script setup lang="ts">
const careList = [
  {
    id: 1,
    icon: '/icons/care_corporate.png',
    title: 'Корпоративные скидки\n и рассрока в медицинских\n клиниках'
  },
  {
    id: 2,
    icon: '/icons/care_corporate.png',
    title:
      'Индивидуальные условия: гибкая\n система выплат, возможность\n совмещения с учебой'
  },
  {
    id: 3,
    icon: '/icons/care_corporate.png',
    title: 'Компенсация аренды жилья '
  },
  {
    id: 4,
    icon: '/icons/care_corporate.png',
    title: 'Насыщенная корпоративная жизнь'
  },
  {
    id: 5,
    icon: '/icons/care_corporate.png',
    title: 'Регулярные командировки по всей\n России и за рубеж'
  },
  {
    id: 6,
    icon: '/icons/care_corporate.png',
    title: 'Индивидуальные кредитные линии'
  }
]
</script>

<template>
  <section class="care">
    <div class="care-title">
      <p class="title">Мы заботимся о своих сотрудниках</p>
    </div>
    <div class="care-list">
      <article v-for="care in careList" :key="care.id" class="care-item">
        <div class="item-icon">
          <NuxtPicture :src="care.icon" />
        </div>
        <p class="item-title">{{ care.title }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.care {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-title {
    color: $text-blue;
  }

  &-list {
    display: flex;
    max-width: 1020px;
    flex-wrap: wrap;
    gap: 25px;
    margin: 0 auto;
  }

  &-item {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    gap: 24px;
    line-height: normal;
    max-width: 495px;
  }
}

.item {
  &-icon {
    max-width: 100px;
    max-height: 100px;
    background-color: #fff;
    border-radius: 100%;
  }

  &-title {
    white-space: pre-wrap;
    font-weight: bold;
    max-width: 371px;
  }
}
</style>
