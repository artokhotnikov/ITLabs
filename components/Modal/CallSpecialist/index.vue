<script setup lang="ts">
type CallSpecialistPropsModal = {
  isActive: boolean
}

interface CallSpecialistEmitsModal {
  (eventName: 'cancel'): void

  (eventName: 'wait-call'): void
}

const emits = defineEmits<CallSpecialistEmitsModal>()
defineProps<CallSpecialistPropsModal>()
</script>

<template>
  <Modal :is-active="isActive">
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
          <Button outline @click="emits('cancel')">Отмена</Button>
          <Button @click="emits('wait-call')">Жду звонка</Button>
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
