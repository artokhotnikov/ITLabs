<script setup lang="ts">
import { useModalsStore } from '~/store/modalsStore'

const modalsStore = useModalsStore()
const { width } = useWindowSize()

const tablet = computed(() => width.value <= 1260)
const mobile = computed(() => width.value <= 767)
</script>

<template>
  <nav class="menu">
    <HeaderMenuMobile v-if="mobile" />
    <section v-else class="menu-header">
      <div class="menu-col">
        <h5 class="title title-xxs">Решения</h5>
        <div class="menu-links">
          <NuxtLink href="/solutions" class="menu-link"> Навигация</NuxtLink>
          <NuxtLink href="/solutions" class="menu-link">
            Электронная очередь
          </NuxtLink>
          <NuxtLink href="/solutions" class="menu-link">
            Кассы самообслуживания
          </NuxtLink>
          <NuxtLink href="/solutions" class="menu-link">
            Виртуальная примерочная
          </NuxtLink>
          <NuxtLink href="/solutions" class="menu-link"> Музеи</NuxtLink>
          <NuxtLink href="/solutions" class="menu-link"> Образование</NuxtLink>
          <NuxtLink href="/solutions" class="menu-link"> Дети</NuxtLink>
        </div>
      </div>
      <div class="menu-col">
        <div class="menu-links">
          <NuxtLink href="/solutions" class="menu-link"> Медицина</NuxtLink>
          <NuxtLink href="/solutions" class="menu-link"> EVENT</NuxtLink>
          <NuxtLink href="/solutions" class="menu-link"> Эксклюзив</NuxtLink>
          <NuxtLink href="/solutions" class="menu-link"> Голография</NuxtLink>
          <NuxtLink href="/solutions" class="menu-link"> Помощь</NuxtLink>
          <NuxtLink href="/solutions" class="menu-link"> Фото</NuxtLink>
          <NuxtLink href="/solutions" class="menu-link"> Кадры</NuxtLink>
        </div>
      </div>
      <div class="menu-col">
        <h5 class="title title-xxs">Услуги</h5>
        <div class="menu-links">
          <NuxtLink href="/categories/1" class="menu-link"> Desktop</NuxtLink>
          <NuxtLink href="/categories/2" class="menu-link"> Web</NuxtLink>
          <NuxtLink href="/categories/3" class="menu-link"> Gamedev</NuxtLink>
        </div>
      </div>
      <div class="menu-col">
        <h5 class="title title-xxs">Проекты</h5>
        <div class="menu-links">
          <NuxtLink href="/projects" class="menu-link">
            Интерактивные устройства
          </NuxtLink>
          <NuxtLink href="/projects" class="menu-link">
            Мобильные приложения
          </NuxtLink>
          <NuxtLink href="/projects" class="menu-link"> Веб-сайты</NuxtLink>
          <NuxtLink href="/projects" class="menu-link">
            Unity разработка
          </NuxtLink>
        </div>
      </div>
      <div class="menu-col">
        <h5 class="title title-xxs">О компании</h5>
        <div class="menu-links">
          <NuxtLink href="/about" class="menu-link"> О нас</NuxtLink>
          <NuxtLink href="/management" class="menu-link"> Руководство</NuxtLink>
          <NuxtLink href="/contacts" class="menu-link"> Контакты</NuxtLink>
        </div>
        <h5 v-if="!tablet" class="title title-xxs">Партнеры</h5>
        <div v-if="!tablet" class="menu-links">
          <NuxtLink href="/partners" class="menu-link">
            Список компаний</NuxtLink
          >
          <NuxtLink href="/" class="menu-link"> Как стать партнером </NuxtLink>
        </div>
      </div>
      <div v-if="tablet" class="menu-col">
        <h5 class="title title-xxs">Партнеры</h5>
        <div class="menu-links">
          <NuxtLink href="/partners" class="menu-link">
            Список компаний</NuxtLink
          >
          <NuxtLink href="/" class="menu-link"> Как стать партнером </NuxtLink>
        </div>
      </div>
    </section>
    <section class="menu-footer">
      <div class="menu-col">
        <h5 class="subtitle">
          <a href="tel:+79511929402">8 951 192 94 02</a>
        </h5>
        <div class="text text-md">Многоконтактный телефон</div>
      </div>
      <div class="menu-col">
        <h5 class="subtitle">
          <a href="mailto:info@itlabs.top">info@itlabs.top</a>
        </h5>
        <div class="text text-md">Электронная почта</div>
      </div>
      <div class="menu-col">
        <h5 class="subtitle">Офис</h5>
        <div class="text text-md">Ул. Холмогорова, 85, Ижевск, 426011</div>
      </div>
      <div class="menu-col">
        <h5 class="subtitle">Мы в соц. сетях</h5>
        <div class="menu-social">
          <Button class="menu-icon" outline>
            <IconsTelegram />
          </Button>
          <Button class="menu-icon" outline>
            <IconsVK />
          </Button>
        </div>
      </div>
      <div class="menu-col">
        <Button
          class="menu-feedback"
          outline
          @click="modalsStore.open('specialist')"
        >
          Перезвоните мне
        </Button>
      </div>
    </section>
  </nav>
</template>

<style scoped lang="scss">
@import 'Menu';
</style>
