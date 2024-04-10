<script setup lang="ts">
type CheckboxProps = {
  type: 'radio' | 'checkbox'
  label: string
  rtl: boolean
  color: 'primary' | 'secondary'
}

type CheckboxEmits = {
  (eventName: 'changeCheckbox', value: boolean): void
}
const props = defineProps<CheckboxProps>()
const emits = defineEmits<CheckboxEmits>()
const state = ref(false)

const onClickCheckbox = () => {
  state.value = !state.value
  emits('changeCheckbox', state.value)
}
</script>

<template>
  <div class="checkbox">
    <label v-if="label && rtl" for="checkbox" class="text-md"
      >{{ label }}
    </label>
    <section>
      <div
        :class="[
          'checkbox-field',
          color,
          type,
          {
            active: state
          }
        ]"
        @click="onClickCheckbox"
      >
        <Transition name="fade">
          <IconsCheck
            v-if="state && type === 'checkbox'"
            class="icon icon-check"
          />
        </Transition>
        <Transition name="fade">
          <div v-if="state && type === 'radio'" class="icon icon-radio radio" />
        </Transition>
      </div>
    </section>
    <label v-if="label && !rtl" for="" class="text-md">{{ label }}</label>
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
    font-family: $font;
    font-weight: 400;
  }
}

.checkbox {
  border-radius: 4px;
}

.radio {
  border-radius: 100%;
}

.primary {
  border-color: $border-white-alpha !important;
}

.active {
  background-color: $bg-blue;
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
