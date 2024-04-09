<script setup lang="ts">
const toggleSpoiler = (e: PointerEvent) => {
  const target: HTMLElement = e.target as HTMLElement
  target.closest('.spoiler')?.classList.toggle('active')
}
</script>

<template>
  <section class="menu-mobile">
    <NuxtLink to="/" class="logo">
      <img src="@/assets/img/logo-blue.svg" alt="Логотип" />
    </NuxtLink>
    <div class="spoiler">
      <div class="spoiler-title title title-xs" @click="toggleSpoiler">
        Решения
        <IconsArrowDown />
      </div>
      <div class="spoiler-body">
        <NuxtLink href="/" class="menu-link"> Навигация</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Электронная очередь</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Кассы самообслуживания</NuxtLink>
        <NuxtLink href="/" class="menu-link">
          Виртуальная примерочная
        </NuxtLink>
        <NuxtLink href="/" class="menu-link"> Музеи</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Образование</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Дети</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Медицина</NuxtLink>
        <NuxtLink href="/" class="menu-link"> EVENT</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Эксклюзив</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Голография</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Помощь</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Фото</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Кадры</NuxtLink>
      </div>
    </div>
    <div class="spoiler">
      <div class="spoiler-title title title-xs" @click="toggleSpoiler">
        Проекты
        <IconsArrowDown />
      </div>
      <div class="spoiler-body">
        <NuxtLink href="/" class="menu-link">
          Интерактивные устройства
        </NuxtLink>
        <NuxtLink href="/" class="menu-link"> Мобильные приложения</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Веб-сайты</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Unity разработка</NuxtLink>
      </div>
    </div>
    <div class="spoiler">
      <div class="spoiler-title title title-xs" @click="toggleSpoiler">
        О компании
        <IconsArrowDown />
      </div>
      <div class="spoiler-body">
        <NuxtLink href="/" class="menu-link"> О нас</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Руководство</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Контакты</NuxtLink>
      </div>
    </div>
    <div class="spoiler">
      <div class="spoiler-title title title-xs" @click="toggleSpoiler">
        Услуги
        <IconsArrowDown />
      </div>
      <div class="spoiler-body">
        <NuxtLink href="/" class="menu-link"> Desktop</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Web</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Gamedev</NuxtLink>
      </div>
    </div>
    <div class="spoiler">
      <div class="spoiler-title title title-xs" @click="toggleSpoiler">
        Партнеры
        <IconsArrowDown />
      </div>
      <div class="spoiler-body">
        <NuxtLink href="/" class="menu-link"> Список компаний</NuxtLink>
        <NuxtLink href="/" class="menu-link"> Как стать партнером</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.menu {
  &-link {
    line-height: 130%;
  }
}

.logo {
  display: block;
  margin: 0 0 32px;
}

.spoiler {
  & + & {
    margin-top: 8px;
  }

  &.active {
    .spoiler-title {
      background: transparent;

      svg {
        transform: rotate(180deg);
      }
    }

    .spoiler-body {
      height: auto;
      margin: 0 0 16px;
    }
  }

  &-title {
    padding: 16px;
    border-radius: 20px;
    background: $bg-third;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &-body {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    gap: 16px;
    color: $text-secondary;
    font-weight: 500;
    height: 0;
    overflow: hidden;
  }
}

.title {
  color: $text-secondary;
}
</style>
