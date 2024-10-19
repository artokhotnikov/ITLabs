<script setup lang="ts">
const advantages = [
  {
    id: 1,
    image: '/img/recruite/screw.png',
    title: 'Сложное сделать простым',
    description:
      'Никаких стресс-собеседований, 5 этапов испытаний, бессмысленного дресс-кода. Тебе есть что нам предложить — легко сработаемся.'
  },
  {
    id: 2,
    image: '/img/recruite/lamp.png',
    title: 'Всегда интересные задачи',
    description:
      'Более 250 реализованных проектов с самыми разными задачами, около 50 проектов параллельно. Ты точно сможешь выбрать интересный для себя проект'
  },
  {
    id: 3,
    image: '/img/recruite/statistic.png',
    title: 'Корпаративное обучение',
    description:
      'Мы вкладываемся в своих сотрудников и их опыт. Внутри команды действует система наставничества, и раз в год каждому сотруднику предлагается пройти любое интересное ему обучение.'
  },
  {
    id: 4,
    image: '/img/recruite/rocket.png',
    title: 'Креативный подход',
    description:
      'Главное для нас — качественный результат, а не способ решения\n задачи'
  }
]
</script>

<template>
  <section class="advantages">
    <div class="advantages-title">
      <p class="title">IT, где все просто</p>
      <p class="subtitle">
        Учитываем скиллы, цели и амбиции каждого члена команды. Постоянно
        сталкиваемся с новыми задачами и находим решение вместе. Для нас нет
        ничего невозможного.
      </p>
    </div>
    <div class="advantages-list">
      <article
        v-for="advantage in advantages"
        :key="advantage.id"
        class="advantages-item"
      >
        <section class="item-image">
          <NuxtPicture :src="advantage.image" alt="advantage" fit="cover" />
        </section>
        <section class="item-content">
          <p class="item-title">{{ advantage.title }}</p>
          <p class="item-description">
            {{ advantage.description }}
          </p>
        </section>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.advantages {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-title {
    text-align: center;
    color: $text-blue;
    margin: 0 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  &-list {
    display: flex;
    gap: 20px;
    @media (max-width: $md1 + px) {
      flex-direction: column;
    }
  }

  &-item {
    cursor: pointer;
    width: 100%;
    height: 100%;
    max-width: 292px;
    min-height: 468px;
    padding: 0 40px 60px 40px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.5);
    line-height: normal;
    @media (max-width: $md1 + px) {
      display: flex;
      max-width: none;
      min-height: 200px;
      align-items: center;
      gap: 20px;
    }
    @media (max-width: $md3 + px) {
      padding: 20px 0;
      gap: 13px;
    }
  }
}

.item {
  &-image {
    display: flex;
    justify-content: center;
    align-items: center;

    picture {
      width: 200px;
      height: 200px;

      :deep(img) {
        width: 100%;
      }

      @media (max-width: $md3 + px) {
        width: 100px;
        height: 100px;
      }
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 13px;
    text-align: center;
    max-width: 212px;
    @media (max-width: $md1 + px) {
      max-width: none;
      text-align: left;
    }
  }

  &-title {
    font-weight: bold;
    font-size: 20px;
    color: $text-blue;
  }

  &-description {
    white-space: pre-wrap;
    color: $text-secondary;
  }
}

.subtitle {
  font-size: 16px;
  color: #000;
  max-width: 664px;
}
</style>
