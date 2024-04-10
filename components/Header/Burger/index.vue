<script setup lang="ts">
import { IconsBurger, IconsClose } from '#components'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['clickHandler'])
const clickHandler = () => {
  emits('clickHandler')
}
</script>

<template>
  <div class="burger">
    <component :is="isOpen ? IconsClose : IconsBurger" @click="clickHandler" />
    <NuxtLink to="/" class="logo">
      <img src="@/assets/img/logo.svg" alt="Логотип" />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@import 'Burger';
</style>
