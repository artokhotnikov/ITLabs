<script setup lang="ts">
import { useModalsStore } from '~/store/modalsStore'

const modalsStore = useModalsStore()
const { width } = useWindowSize()

const sm = computed(() => width.value <= 768)
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-container">
        <HeaderBurger />
        <HeaderNav />
<!--        <HeaderSearch />-->
        <ClientOnly>
          <Button
            class="header-ask"
            @click="modalsStore.open('discussionQuestion')"
          >
            <IconsQuestion v-if="sm" />
            <span v-else>Задать вопрос</span>
          </Button>
        </ClientOnly>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import 'Header';
</style>
