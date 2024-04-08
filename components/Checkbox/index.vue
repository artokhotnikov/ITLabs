<script setup lang="ts">
import Check from '~/components/Icons/Check.vue'

type CheckboxProps = {
  type: 'radio' | 'checkbox'
  label: string
  labelRotate: 'rtl' | 'rtr'
  color: 'primary' | 'secondary'
}

defineProps<CheckboxProps>()
const selectIcon = Check
</script>

<template>
  <div class="checkbox">
    <label v-if="label && labelRotate === 'rtl'" for="checkbox" class="text-md"
      >{{ label }}
    </label>
    <input :id="type" :type="type" :class="[color]" />
    <label v-if="label && labelRotate === 'rtr'" for="" class="text-md">{{
      label
    }}</label>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.checkbox {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  input {
    width: 20px;
    height: 20px;
    border: 1px solid transparent;
  }

  input[type='checkbox'] {
    -webkit-appearance: none;
    border-radius: 4px;

    &:checked {
      content: '\2713';
      background-color: $bg-blue;
    }
  }

  input[type='radio'] {
    -webkit-appearance: none;
    border-radius: 100%;

    &:checked {
      background-color: $bg-blue;
    }
  }

  label {
    font-family: $font;
    font-weight: 400;
  }
}

.primary {
  border-color: $border-white-alpha !important;
}
</style>
