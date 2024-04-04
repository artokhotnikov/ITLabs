<script setup lang="ts">
type ResultRequestModalProps = {
  isActive: boolean
  type: 'success' | 'error'
}

interface ResultRequestModalEmits {
  (eventName: 'update:isActive', value: boolean): void
}

const emits = defineEmits<ResultRequestModalEmits>()
defineProps<ResultRequestModalProps>()
</script>

<template>
  <Modal @close="emits('update:isActive', false)">
    <template #content>
      <section class="content">
        <div class="content-head">
          <article v-if="type === 'success'" class="icon icon-success">
            <IconsCheck />
          </article>
          <article v-if="type === 'error'" class="icon icon-error">
            <IconsClose />
          </article>
        </div>
        <div class="content-text">
          <h3
            v-if="type === 'success'"
            class="text-main text-success title-md bold"
          >
            <span>Данные</span>
            успешно отправлены
          </h3>
          <h3 v-if="type === 'error'" class="text-main text-error">Ошибка</h3>
          <p v-if="type === 'success'" class="text-second">
            Мы ответим вам в ближайшее время
          </p>
          <p v-if="type === 'error'" class="text-second">
            Попробуйте повторить попытку позже
          </p>
        </div>
        <div class="content-actions">
          <Button rounded @click="emits('update:isActive', false)">Ок</Button>
        </div>
      </section>
    </template>
  </Modal>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  &-head {
  }

  &-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  &-actions {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 100%;
      max-width: 100px;
    }
  }
}

.icon {
  width: 92px;
  height: 92px;
  border: 2px solid;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &-success {
    color: $text-blue;
  }

  &-error {
    color: $text-red;
  }

  svg {
    width: 56px;
    height: 54px;
  }
}

.text {
  &-main {
    font-family: $fontSecond;
    font-size: 24px;
    text-transform: uppercase;

    span {
      color: $text-primary;
    }
  }

  &-error {
    color: $text-primary;
  }

  &-success {
    color: $text-blue;
  }

  &-second {
    font-family: $font;
    color: $text-primary;
    font-size: 16px;
  }
}
</style>
