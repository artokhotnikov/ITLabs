<script setup lang="ts">
import { useGlobalStore } from '~/store/globalStore'
import { useModalsStore } from '~/store/modalsStore'

const modalsStore = useModalsStore()
const globalStore = useGlobalStore()
const { lock, unlock } = useBodyLock()
const { width } = useWindowSize()

const sm = computed(() => width.value <= 768)
const toggleMenu = () => {
  globalStore.toggleMenu()
  if (globalStore.isOpenMenu) {
    lock()
  } else {
    unlock()
  }
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
        <HeaderSearch />
        <Button
          class="header-ask"
          @click="modalsStore.open('discussionQuestion')"
        >
          <IconsQuestion v-if="sm" />
          <span v-else>Задать вопрос</span>
        </Button>
        <transition name="fade-top">
          <HeaderMenu v-if="globalStore.isOpenMenu" />
        </transition>
      </div>
    </div>
    <transition name="fade">
      <PageOverlay v-if="globalStore.isOpenMenu" @on-click="toggleMenu" />
    </transition>
  </header>
</template>

<style scoped lang="scss">
@import 'Header';
</style>
