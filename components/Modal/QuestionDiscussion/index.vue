<script setup lang="ts">
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
const form = ref({
  name: '',
  phone: '',
  question: '',
  files: null
})
</script>

<template>
  <Modal @close="emits('update:isActive', false)">
    <template #content>
      <section class="content">
        <div class="content-title">
          <h3 v-if="type === 'discussion'" class="title-xs uppercase">
            <span class="highlight">Обсудить</span> проект
          </h3>
          <h3 v-if="type === 'question'" class="title-xs uppercase">
            <span class="highlight">Ваш</span> вопрос
          </h3>
          <p>Мы ответим вам в ближайшее время</p>
        </div>
        <form class="content-form">
          <fieldset>
            <Input
              v-model="form.name"
              type="text"
              class="form-field"
              color="primary"
              placeholder="Имя"
            />
            <Input
              v-model="form.phone"
              type="tel"
              class="form-field"
              color="primary"
              placeholder="Телефон"
            />
            <div class="form-field form-double">
              <Textarea
                v-model="form.question"
                placeholder="Прикрепляю тз на оценку проекта, интересует стоимость и сроки разработки, жду ответа в telegram"
                color="primary"
              >
                <template #additional>
                  <InputFile v-model="form.files" class="additional" />
                </template>
              </Textarea>
            </div>
          </fieldset>
        </form>
        <div class="content-preferences">
          <h5>Предпочтительный вид связи</h5>
          <form class="preferences-form">
            <div class="preferences-field">
              <Checkbox type="checkbox" label="Telegram" color="secondary" />
            </div>
            <div class="preferences-field">
              <Checkbox type="checkbox" label="Whatsapp" color="secondary" />
            </div>
            <div class="preferences-field">
              <Checkbox type="checkbox" label="Email" color="secondary" />
            </div>
            <div class="preferences-field">
              <Checkbox type="checkbox" label="По телефону" color="secondary" />
            </div>
          </form>
        </div>
        <div class="content-actions">
          <Button outline @click="emits('update:isActive', false)">
            Отмена
          </Button>
          <Button @click="emits('confirm')">Отправить</Button>
        </div>
      </section>
    </template>
  </Modal>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  &-title {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 292px;
    text-align: center;

    h3 {
      font-family: $fontSecond;

      .highlight {
        color: $text-blue;
      }
    }

    p {
      font-family: $font;
    }
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
