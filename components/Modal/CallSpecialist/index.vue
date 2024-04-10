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
const phone = ref('')
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
        <form action="" class="content-form">
          <fieldset>
            <Input
              v-model="phone"
              type="text"
              color="primary"
              placeholder="Введите номер телефона"
            />
          </fieldset>
        </form>
        <div class="content-actions">
          <Button
            class="action action-cancel"
            outline
            @click="emits('update:isActive', false)"
          >
            Отмена
          </Button>
          <Button class="action action-send" @click="emits('confirm')"
            >Жду звонка
          </Button>
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
    text-align: center;
  }

  &-title {
    font-family: $fontSecond;
    text-transform: uppercase;
  }

  &-subtitle {
    font-family: $font;
    color: $text-primary;
    line-height: 20.8px;
    max-width: 292px;
    font-size: 16px;
    @media (max-width: $md2 + px) {
      max-width: 550px;
    }
    @media (max-width: $md5 + px) {
      max-width: 288px;
    }
  }

  &-form {
    width: 100%;
    margin: 0 auto;
    max-width: 290px;
  }

  &-actions {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 10px;
    @media (max-width: $md5 + px) {
      flex-direction: column;
      align-items: center;
    }
  }
}

.action {
  @media (max-width: $md5 + px) {
    flex-direction: column;
    align-items: center;
    &:nth-child(1) {
      max-width: 140px;
    }
    &:nth-child(2) {
      max-width: 170px;
    }
  }

  &-cancel {
    width: 100%;
    max-width: 140px;
  }

  &-send {
    width: 100%;
    max-width: 170px;
  }
}
</style>
