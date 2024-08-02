<script setup lang="ts">
import { useModalsStore } from '~/store/modalsStore'
import { useGlobalStore } from '~/store/globalStore'

const modalsStore = useModalsStore()
const globalStore = useGlobalStore()
const { lock, unlock } = useBodyLock()
const { width } = useWindowSize()

const sm = computed(() => width.value <= 992)
const toggleMenu = () => {
  globalStore.toggleMenu()
  if (globalStore.isOpenMenu) {
    lock()
  } else {
    unlock()
  }
}
const [isOpenSearch, toggleIsOpenSearch] = useToggle()
const toggleSearch = (value: boolean) => {
  toggleIsOpenSearch(value)
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-container">
        <HeaderBurger
          :is-open="globalStore.isOpenMenu"
          @click-handler="toggleMenu"
        />
        <HeaderNav />
        <HeaderSearch @toggle-search="toggleSearch" />
        <HeaderSearchMenu
          :is-open="isOpenSearch"
          @toggle-search="toggleSearch"
        />
        <ClientOnly>
          <Button
            class="header-ask"
            @click="modalsStore.open('discussionQuestion')"
          >
            <IconsQuestion v-if="sm" />
            <span v-else>Задать вопрос</span>
          </Button>
        </ClientOnly>
        <transition :name="sm ? 'slide-left' : 'fade-top'">
          <HeaderMenu v-if="globalStore.isOpenMenu" />
        </transition>
        <transition name="fade">
          <PageOverlay v-if="globalStore.isOpenMenu" @on-click="toggleMenu" />
        </transition>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import 'Header';
</style>
