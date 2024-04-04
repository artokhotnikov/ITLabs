<script setup lang="ts">
type CallSpecialistModalProps = {
  isActive: boolean
}

interface CallSpecialistModalEmits {
  (eventName: 'confirm'): void

  (eventName: 'update:isActive', value: boolean): void
}

const emits = defineEmits<CallSpecialistModalEmits>()
defineProps<CallSpecialistModalProps>()
</script>

<template>
  <Modal @close="emits('update:isActive', false)">
    <template #content>
      <section class="content">
        <div class="content-head">
          <h3 class="content-title title-xs bold">Звонок</h3>
          <p class="content-subtitle text-md">
            Специалисты свяжутся с вами и ответят на все интересующие вопросы
          </p>
        </div>
        <form action="">
          <fieldset>
            <input
              id="field-phone"
              type="tel"
              placeholder="Номер телефона"
              required
            />
          </fieldset>
        </form>
        <div class="content-actions">
          <Button outline @click="emits('update:isActive', false)">
            Отмена
          </Button>
          <Button @click="emits('confirm')">Жду звонка</Button>
        </div>
      </section>
    </template>
  </Modal>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.content {
  color: $text-blue;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-head {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-title {
    max-width: 292px;
    font-family: $fontSecond;
    text-transform: uppercase;
  }

  &-subtitle {
    font-family: $font;
    color: $text-primary;
    line-height: 20.8px;
    max-width: 292px;
    font-size: 16px;
  }

  &-actions {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 10px;
  }
}
</style>
