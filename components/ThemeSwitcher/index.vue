<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { IconsMoon, IconsSun } from '#components'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const click = () => {
  toggleDark()
}
</script>

<template>
  <div :class="['switcher', { active: isDark }]" @click="click">
    <div :class="['switcher-icon', { active: isDark }]">
      <Component :is="isDark ? IconsMoon : IconsSun" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.switcher {
  width: 56px;
  height: 32px;
  padding: 4px;
  background: $text-third;
  border-radius: 100px;
  position: relative;
  color: $text-secondary;
  transition: all 0.3s ease !important;

  &.active {
    background: $text-blue;
    color: $text-blue;
  }

  &-icon {
    position: relative;
    left: 0%;
    width: 24px;
    height: 24px;
    background: $bg-white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s !important;
    box-shadow:
      0 1px 2px 0 rgba(16, 24, 40, 0.2),
      0 1px 4px 0 rgba(16, 24, 40, 0.3);

    &.active {
      left: 50%;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
