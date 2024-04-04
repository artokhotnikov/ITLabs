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
            <input type="text" class="form-field" />
            <input type="tel" class="form-field" />
            <div class="form-field">
              <textarea> </textarea>
              <input type="file" />
            </div>
          </fieldset>
        </form>
        <div class="content-preferences">
          <h5>Предпочтительный вид связи</h5>
          <form class="preferences-form">
            <div class="preferences-field">
              <input id="checkbox-telegram" type="checkbox" />
              <label for="checkbox-telegram">Telegram</label>
            </div>
            <div class="preferences-field">
              <input id="checkbox-whatsapp" type="checkbox" />
              <label for="checkbox-whatsapp">Whatsapp</label>
            </div>
            <div class="preferences-field">
              <input id="checkbox-email" type="checkbox" />
              <label for="checkbox-email">Email</label>
            </div>
            <div class="preferences-field">
              <input id="checkbox-phone" type="checkbox" />
              <label for="checkbox-phone">По телефону</label>
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
}

.preferences {
  &-form {
    display: flex;
    flex-wrap: wrap;
    max-width: 292px;
    gap: 40px;
  }

  &-field {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
  }
}
</style>
