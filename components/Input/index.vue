<script setup lang="ts">
interface InputProps {
  modelValue: string
  placeholder?: string
  validRegx?: RegExp
  type: 'text' | 'password'
  color: 'primary'
  required?: boolean
  outlined?: boolean
  disabled?: boolean
}

interface InputEmits {
  (eventName: 'update:modelValue', value: string): void
}

const props = defineProps<InputProps>()
const emits = defineEmits<InputEmits>()

const validState = ref(true)
const focused = ref(false)
const haveContent = computed(() => props.modelValue.length > 0)

const checkValid = () => {
  if (!props.validRegx) return
  validState.value = props.validRegx.test(props.modelValue)
}
const onInput = (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}
const makeValid = () => {
  validState.value = true
}

const onClear = () => {
  emits('update:modelValue', '')
  makeValid()
}

const focusIn = () => {
  focused.value = true
  makeValid()
}
const focusOut = () => {
  focused.value = false
  checkValid()
}
</script>

<template>
  <div class="input">
    <input
      :class="[
        color,
        {
          error: !validState
        }
      ]"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :value="modelValue"
      @input="onInput"
      @focusout="focusOut"
      @focusin="focusIn"
    />
    <Transition name="fade">
      <IconsClose
        v-show="haveContent && focused"
        class="icon icon-close"
        @click="onClear"
      />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.input {
  position: relative;
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input {
  padding: 16px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: 0.3s all ease-in-out;

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
</style>
