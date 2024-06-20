<script setup lang="ts">
import type { MaskInputOptions } from 'maska'

interface InputProps {
  name: string
  placeholder?: string
  type?: string
  color: 'primary | secondary'
  outlined?: boolean
  disabled?: boolean
  rules?: any
  maska?: string
}

const props = defineProps<InputProps>()

const { value, errorMessage } = useField(() => props.name, props.rules)
const options = reactive<MaskInputOptions>({
  mask: props.maska || null
})
</script>

<template>
  <div class="input">
    <input
      v-model="value"
      v-maska="options"
      :class="color"
      :type="type || 'text'"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <p class="input-error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.input {
  position: relative;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &-error {
    font-size: 10px;
    color: $text-red;
    position: absolute;
    left: 16px;
    bottom: -14px;
  }
}

input {
  padding: 17px 16px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: 0.3s all ease-in-out;
  font-size: 14px;
  color: inherit;

  &::placeholder {
    color: inherit;
  }

  &:focus,
  &:active {
    border-color: $border-blue;
  }

  &:hover {
    cursor: text;
    border-color: $border-blue;
  }
}

.icon {
  position: absolute;
  right: 16px;

  &-close {
  }
}

.error {
  border-color: #ff5741;
  color: #ff5741;
  background-color: #ffedeb;
}

.primary {
  background-color: $bg-third;
}

.secondary {
  background-color: $bg-white;
}

.dark {
  .input {
    color: $text-white;
  }

  .primary,
  .secondary {
    background-color: $bg-white-alpha-5;
  }
}
</style>
