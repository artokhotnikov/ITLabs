<script setup lang="ts">
import { useCallbackFormStore } from '~/store/callbackFormStore'
import { useModalsStore } from '~/store/modalsStore'

type QuestionDiscussionModalProps = {
  isActive: boolean
  type: 'question' | 'discussion'
}

interface QuestionDiscussionModalEmits {
  (eventName: 'update:isActive', value: boolean): void

  (eventName: 'confirm'): void
}

const emits = defineEmits<QuestionDiscussionModalEmits>()
defineProps<QuestionDiscussionModalProps>()
const isDark = useDark()
const callbackFormStore = useCallbackFormStore()
const modalsStore = useModalsStore()

const route = useRoute()
const form = ref({
  mediaFile: null,
  connection: {
    telegram: true,
    whatsapp: false,
    email: false,
    phone: true
  }
})

const onSubmit = async (args, e) => {
  const title = e.evt.target.dataset.title + ' ' + route.fullPath
  form.value = { ...form.value, ...args, title }
  const res = await callbackFormStore.postForm(form.value)
  e.resetForm()
  form.value = {
    mediaFile: null,
    connection: {
      telegram: true,
      whatsapp: false,
      email: false,
      phone: true
    }
  }
  modalsStore.close('discussionQuestion')
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
        <div class="content-title">
          <h3 v-if="type === 'discussion'" class="title title-xs">
            <mark>Обсудить</mark>
            проект
          </h3>
          <h3 v-if="type === 'question'" class="title title-xs">
            <mark>Ваш</mark>
            вопрос
          </h3>
          <p class="text">Мы ответим вам в ближайшее время</p>
        </div>
        <Form
          class="content-form form"
          data-title="Задать вопрос"
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
              type="tel"
              class="form-field"
              color="primary"
              placeholder="Телефон"
              :rules="callbackFormStore.yupRulePhone()"
              maska="+7 (###) ###-##-##"
            />
            <div class="form-field form-double">
              <Textarea
                name="description"
                placeholder="Дополнительная информация"
                color="primary"
              >
                <!--                <template #additional>-->
                <!--                  <InputFile v-model="form.mediaFile" class="additional" />-->
                <!--                </template>-->
              </Textarea>
            </div>
          </fieldset>

          <div class="content-preferences">
            <p class="text medium">Предпочтительный вид связи</p>
            <div class="preferences-form">
              <div class="preferences-field">
                <Checkbox
                  v-model="form.connection.telegram"
                  type="checkbox"
                  label="Telegram"
                  color="secondary"
                />
              </div>
              <div class="preferences-field">
                <Checkbox
                  v-model="form.connection.whatsapp"
                  type="checkbox"
                  label="Whatsapp"
                  color="secondary"
                />
              </div>
              <div class="preferences-field">
                <Checkbox
                  v-model="form.connection.email"
                  type="checkbox"
                  label="Email"
                  color="secondary"
                />
              </div>
              <div class="preferences-field">
                <Checkbox
                  v-model="form.connection.phone"
                  type="checkbox"
                  label="По телефону"
                  color="secondary"
                />
              </div>
            </div>
          </div>
          <div class="content-actions">
            <Button
              outline
              :color="isDark ? 'secondary' : 'primary'"
              type="reset"
              @click="emits('update:isActive', false)"
            >
              Отмена
            </Button>
            <Button type="submit">Отправить</Button>
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
    color: $text-white;
  }
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  color: $text-secondary;

  &-title {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 292px;
    text-align: center;
  }

  &-form {
    width: 100%;

    fieldset {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  &-preferences {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  &-actions {
    margin: 32px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: $md4 + px) {
      flex-direction: column;
    }

    .btn {
      &:first-child {
        width: 140px;
      }

      &:last-child {
        width: 160px;
      }
    }
  }
}

.form {
  &-field {
  }

  &-double {
    position: relative;
    z-index: 0;
    min-height: 150px;
    max-height: 150px;
  }

  &-textarea {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    min-height: 150px;
    background-color: $bg-third;
    border-radius: 16px;
  }

  &-file {
    position: absolute;
    overflow: hidden;
    z-index: 2;
  }
}

.preferences {
  &-form {
    display: flex;
    flex-wrap: wrap;
    max-width: 292px;
    gap: 20px;
  }

  &-field {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
  }
}

.additional {
  justify-content: flex-end;
}
</style>
