<script setup lang="ts">
type TextareaProps = {
  modelValue: string
  color: 'primary'
  name?: string
  placeholder?: string
  required?: boolean
}

type TextareaEmits = {
  (eventName: 'update:modelValue', value: string): void
  (eventName: 'changeTextarea', value: string): void
}
const props = defineProps<TextareaProps>()
const emits = defineEmits<TextareaEmits>()
const state = ref(props.modelValue)
const onChangeTextarea = (e: Event) => {
  state.value = (e.target as HTMLTextAreaElement).value
  emits('changeTextarea', state.value)
  emits('update:modelValue', state.value)
}
</script>

<template>
  <div :class="['textarea', color]">
    <textarea
      :class="['textarea-field']"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :value="state"
      autocomplete="on"
      spellcheck="true"
      @input="onChangeTextarea"
    >
    </textarea>
    <section class="textarea-additional">
      <slot name="additional" />
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.dark {
  .primary {
    background: $bg-white-alpha-5;
  }

  textarea {
    color: $text-white;
    &::placeholder {
      color: $text-white;
    }
  }
}

.textarea {
  position: relative;
  border-radius: 16px;
  font-size: 14px;

  &-field {
    position: relative;
    width: 100%;
    min-height: 100px;
    padding: 16px;
    resize: none;
    background: none;
  }

  &-additional {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    bottom: 10px;
    right: 10px;
  }
}

.primary {
  background-color: $bg-primary;
}
</style>
