<script setup lang="ts">
type TextareaProps = {
  color: 'primary'
  name: string
  placeholder?: string
}

type TextareaEmits = {
  (eventName: 'update:modelValue', value: string): void
  (eventName: 'changeTextarea', value: string): void
}
const props = defineProps<TextareaProps>()
const emits = defineEmits<TextareaEmits>()
const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <div :class="['textarea', color]">
    <textarea
      v-model="value as string"
      class="textarea-field"
      :placeholder="placeholder"
      autocomplete="on"
      spellcheck="true"
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
