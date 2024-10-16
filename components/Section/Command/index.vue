<script setup lang="ts">
const rows = [
  [
    {
      id: 1,
      title: 'Web разработка',
      description:
        'Web приложения любой сложности. Разработка на PHP с использованием фреймворка Symfony, с Vue.js. Сайты, интернет-магазины, интерактив'
    },
    {
      id: 2,
      title: 'Тестирование',
      description:
        'Отловят даже самый ловкий баг. Тестируем наше ПО на всех платформах, устройствах и операционных системах'
    },
    {
      id: 3,
      title: 'Отдел продаж',
      description:
        'Знают все о продукте и о конкурентах. Ведут постоянный мониторинг и анализ рынка. Навыки продаж, деловой переписки, основы психологии и менеджмента – их сильные стороны'
    },
    {
      id: 4,
      title: 'Дизайн',
      description:
        'Настоящие UX|UI профессионалы. Разработка самых интуитивных интерфейсов. Figma, Adobe Photoshop, Adobe Illustrator – основное стек наших специалистов'
    }
  ],
  [
    {
      id: 5,
      title: 'Проджект менеджеры',
      description:
        'Точная задача – половина успеха. Все наши менеджеры имеют опыт в разработке и управлении процессами'
    },
    {
      id: 6,
      title: 'Прикладная разработка',
      description:
        'Прикладная разработка на C#, на платформе .NET. Пишем высокопроизводительные и масштабируемые приложения. Интегрируем любую периферию'
    },
    {
      id: 7,
      title: 'Маркетинг и продвижение',
      description:
        'Здесь происходит развитие имиджа компании, увеличение доли рынка, стимуляция роста продаж'
    }
  ]
]
</script>

<template>
  <section class="command">
    <div class="command-title">
      <p class="title">Команада</p>
    </div>
    <div class="command-image">
      <NuxtPicture src="/img/recruite/command.png" class="img" />
    </div>
    <div class="command-directions">
      <div class="row" v-for="(directions, index) in rows" :key="directions">
        <article
          v-for="direction in directions"
          :key="direction.id"
          :class="['command-item', { md: index === 0, sm: index === 1 }]"
        >
          <section class="item-content">
            <p class="item-title">{{ direction.title }}</p>
            <p class="item-description">
              {{ direction.description }}
            </p>
          </section>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.command {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-title {
    text-align: center;
    color: $text-blue;
  }

  &-directions {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .row {
      display: flex;
      gap: 20px;
    }
  }

  &-item {
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 40px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.5);
    line-height: normal;

    &.md {
      min-height: 292px;
    }

    &.sm {
      min-height: 229px;
    }
  }
}

.item {
  &-content {
    display: flex;
    flex-direction: column;
    gap: 13px;
    text-align: left;
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
