<script setup lang="ts">
type CheckboxProps = {
  modelValue: boolean
  type: 'radio' | 'checkbox'
  label?: string
  rtl?: boolean
  color: 'primary' | 'secondary'
}

type CheckboxEmits = {
  (eventName: 'update:modelValue', value: boolean): void
}
const props = defineProps<CheckboxProps>()
const emits = defineEmits<CheckboxEmits>()

const onClickCheckbox = () => {
  emits('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div class="checkbox">
    <label
      v-if="label && rtl"
      for="checkbox"
      class="text-md"
      @click="onClickCheckbox"
    >
      {{ label }}
    </label>
    <section>
      <div
        :class="[
          'checkbox-field',
          color,
          type,
          {
            active: modelValue
          }
        ]"
        @click="onClickCheckbox"
      >
        <Transition name="fade">
          <IconsCheck
            v-if="modelValue && type === 'checkbox'"
            class="icon icon-check"
          />
        </Transition>
        <Transition name="fade">
          <div
            v-if="modelValue && type === 'radio'"
            class="icon icon-radio radio"
          />
        </Transition>
      </div>
    </section>
    <label v-if="label && !rtl" for="" class="text-md" @click="onClickCheckbox">
      {{ label }}
    </label>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.checkbox {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  &-field {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid transparent;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  label {
    cursor: pointer;
  }
}

.checkbox {
  border-radius: 4px;
}

.radio {
  border-radius: 100%;
}

.primary {
  border-color: $border-blue-dark;
}

.secondary {
  border-color: $border-secondary;
}

.active {
  background-color: $bg-blue;
  border-color: $border-blue-dark;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;

  &-radio {
    width: 8px;
    height: 8px;
    background-color: $bg-white;
  }
}
</style>
