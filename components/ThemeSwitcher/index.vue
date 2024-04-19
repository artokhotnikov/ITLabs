<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const click = () => {
  toggleDark()
}
</script>

<template>
  <div class="switcher" @click="click">
    {{ isDark ? 'темная' : 'светлая' }}
  </div>
</template>

<style scoped lang="scss"></style>
