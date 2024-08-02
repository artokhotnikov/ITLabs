<script setup lang="ts">
import { useModalsStore } from '~/store/modalsStore'
import { useContentStore } from '~/store/contentStore'

const modalsStore = useModalsStore()
const contentStore = useContentStore()
const isDark = useDark()

const toggleSpoiler = (e: PointerEvent) => {
  const target: HTMLElement = e.target as HTMLElement
  target.closest('.spoiler')?.classList.toggle('active')
}
const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <nav class="menu">
    <section class="menu-mobile">
      <NuxtLink to="/" class="logo">
        <img src="@/assets/img/logo-blue.svg" alt="Логотип" />
      </NuxtLink>
      <div class="spoiler">
        <div class="spoiler-title title title-xxs" @click="toggleSpoiler">
          Услуги
          <IconsArrowDown />
        </div>
        <div class="spoiler-body">
          <NuxtLink
            v-for="cat in contentStore.projectCategories"
            :key="cat.id"
            :href="`/categories/${cat.slug}`"
            class="menu-link"
          >
            {{ cat.title }}
          </NuxtLink>
        </div>
      </div>
      <div class="spoiler">
        <div class="spoiler-title title title-xxs" @click="toggleSpoiler">
          Проекты
          <IconsArrowDown />
        </div>
        <div class="spoiler-body">
          <NuxtLink
            v-for="cat in contentStore.projects"
            :key="cat.id"
            :href="`/projects/${cat.slug}`"
            class="menu-link"
          >
            {{ cat.title }}
          </NuxtLink>
        </div>
      </div>
      <div class="spoiler">
        <div class="spoiler-title title title-xxs" @click="toggleSpoiler">
          О компании
          <IconsArrowDown />
        </div>
        <div class="spoiler-body">
          <NuxtLink href="/about" class="menu-link"> О нас</NuxtLink>
          <NuxtLink href="/contacts" class="menu-link"> Контакты</NuxtLink>
        </div>
      </div>
    </section>
    <section class="menu-footer">
      <div class="menu-col">
        <h5 class="subtitle">
          <a href="tel:+79952964335">+7 995 296 4335</a>
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
          <Button
            class="menu-icon"
            outline
            @click="openLink('https://t.me/ITLabs_top')"
          >
            <IconsTelegram />
          </Button>
          <Button
            class="menu-icon"
            outline
            @click="openLink('https://vk.com/itlabs_top')"
          >
            <IconsVK />
          </Button>
        </div>
      </div>
      <div class="menu-col">
        <ClientOnly>
          <Button
            class="menu-feedback"
            outline
            :color="isDark ? 'secondary' : 'primary'"
            @click="modalsStore.open('specialist')"
          >
            Перезвоните мне
          </Button>
        </ClientOnly>
      </div>
    </section>
  </nav>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import 'Menu';

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

.dark .spoiler {
  &-title {
    background: $bg-white-alpha-5;
    color: $text-white;
  }

  &-body {
    color: $text-white;
  }
}
</style>
