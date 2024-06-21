<script setup lang="ts">
import { useCallbackFormStore } from '~/store/callbackFormStore'
import { useModalsStore } from '~/store/modalsStore'

type CallSpecialistModalProps = {
  isActive: boolean
}

interface CallSpecialistModalEmits {
  (eventName: 'confirm'): void

  (eventName: 'update:isActive', value: boolean): void
}

const isDark = useDark()
const emits = defineEmits<CallSpecialistModalEmits>()
defineProps<CallSpecialistModalProps>()
const callbackFormStore = useCallbackFormStore()
const modalsStore = useModalsStore()
const route = useRoute()

const onSubmit = async (args, e) => {
  const title = e.evt.target.dataset.title + ' ' + route.fullPath
  const res = await callbackFormStore.postForm({ ...args, title })
  e.resetForm()

  modalsStore.close('specialist')
  if (res === 'success') {
    modalsStore.open('resultSuccess')
  } else {
    modalsStore.open('resultError')
  }
}
</script>

<template>
  <Modal @close="emits('update:isActive', false)">
    <template #content>
      <section class="content">
        <div class="content-head">
          <h3 class="content-title title title-xs bold">
            <mark>Звонок</mark>
          </h3>
          <p class="content-subtitle text">
            Специалисты свяжутся с вами и ответят на все интересующие вопросы
          </p>
        </div>
        <Form
          class="content-form"
          data-title="Звонок специалиста"
          @submit="onSubmit"
        >
          <fieldset>
            <Input
              name="name"
              type="text"
              class="form-field"
              color="primary"
              placeholder="Имя"
              :rules="callbackFormStore.yupRuleName()"
            />
            <Input
              name="phone"
              type="text"
              color="primary"
              placeholder="Номер телефона"
              :rules="callbackFormStore.yupRulePhone()"
              maska="+7 (###) ###-##-##"
            />
          </fieldset>

          <div class="content-actions">
            <Button
              class="action action-cancel"
              outline
              :color="isDark ? 'secondary' : 'primary'"
              type="reset"
              @click="emits('update:isActive', false)"
            >
              Отмена
            </Button>
            <Button
              class="action action-send"
              type="submit"
              @click="emits('confirm')"
            >
              Жду звонка
            </Button>
          </div>
        </Form>
      </section>
    </template>
  </Modal>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.dark {
  .content {
    &-subtitle {
      color: $text-white;
    }
  }
}

.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;

  &-head {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  &-title {
  }

  &-subtitle {
    color: $text-secondary;
    max-width: 292px;
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

    fieldset {
      display: grid;
      gap: 16px;
    }
  }

  &-actions {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 10px;
    margin: 32px 0 0;
    @media (max-width: $md5 + px) {
      flex-direction: column;
      align-items: center;
    }
  }
}

.action {
  @media (max-width: $md5 + px) {
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
