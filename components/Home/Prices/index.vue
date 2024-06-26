<script setup lang="ts">
import { useCallbackFormStore } from '~/store/callbackFormStore'
import { useModalsStore } from '~/store/modalsStore'

const callbackFormStore = useCallbackFormStore()
const modalsStore = useModalsStore()
const estimate = ref({
  name: '',
  phone: '',
  email: '',
  title: '',
  connection: {
    telegram: true,
    whatsapp: false,
    email: false,
    phone: true
  }
})

const onSubmit = async (args, e) => {
  const title = e.evt.target.dataset.title
  estimate.value = { ...estimate.value, ...args, title }
  const res = await callbackFormStore.postForm(estimate.value)
  e.resetForm()
  if (res === 'success') {
    modalsStore.open('resultSuccess')
  } else {
    modalsStore.open('resultError')
  }
}
</script>

<template>
  <section class="section prices">
    <div class="container">
      <h2 class="prices-title title">Цены</h2>
      <div class="prices-list">
        <div class="prices-estimate">
          <Form class="estimate" data-title="Смета проекта" @submit="onSubmit">
            <div class="estimate-title subtitle bold">
              Рассчитайте
              <mark>смету</mark>
              проекта
            </div>
            <div class="estimate-row">
              <Input
                name="name"
                placeholder="Имя"
                type="text"
                color="primary"
                :rules="callbackFormStore.yupRuleName()"
              />
            </div>
            <div class="estimate-row">
              <Input
                name="phone"
                placeholder="Телефон"
                type="text"
                color="primary"
                :rules="callbackFormStore.yupRulePhone()"
                maska="+7 (###) ###-##-##"
              />
            </div>
            <div class="estimate-row">
              <Input
                name="email"
                placeholder="E-mail"
                type="text"
                color="primary"
                :rules="callbackFormStore.yupRuleEmail()"
              />
            </div>
            <div class="estimate-connection">
              <div class="estimate-subtitle text bold">
                Предпочтительный вид связи:
              </div>
              <div class="estimate-checkboxes">
                <Checkbox
                  v-model="estimate.connection.telegram"
                  type="checkbox"
                  label="Telegram"
                  color="secondary"
                />
                <Checkbox
                  v-model="estimate.connection.whatsapp"
                  type="checkbox"
                  label="WhatsApp"
                  color="secondary"
                />
                <Checkbox
                  v-model="estimate.connection.email"
                  type="checkbox"
                  label="Email"
                  color="secondary"
                />
                <Checkbox
                  v-model="estimate.connection.phone"
                  type="checkbox"
                  label="По телефону"
                  color="secondary"
                />
              </div>
            </div>
            <Button class="estimate-btn">Отправить</Button>
          </Form>
        </div>
        <div class="prices-callback">
          <Form class="callback" data-title="Zoom" @submit="onSubmit">
            <div class="callback-img">
              <img src="/img/home_prices/main.png" alt="" />
            </div>
            <div class="callback-title subtitle bold">
              Или запишитесь на
              <mark> ZOOM</mark>
              для уточнения всех деталей
            </div>
            <div class="callback-row">
              <Input
                name="name"
                placeholder="Имя"
                type="text"
                color="primary"
                :rules="callbackFormStore.yupRuleName()"
              />
              <Input
                name="phone"
                placeholder="Телефон"
                type="text"
                color="primary"
                :rules="callbackFormStore.yupRulePhone()"
                maska="+7 (###) ###-##-##"
              />
            </div>
            <Button class="callback-btn">Записаться</Button>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.prices {
  color: $text-secondary;

  &-title {
    color: $text-blue;
    text-align: center;
    @media (max-width: $md3 + px) {
      margin: 0 0 16px;
    }
  }

  &-list {
    display: flex;
    align-items: flex-end;
    gap: 24px;
    justify-content: space-between;
    max-width: 1020px;
    margin: 0 auto;
    @media (max-width: $md3 + px) {
      flex-direction: column;
      align-items: center;
      gap: 64px;
    }
  }

  &-estimate {
    max-width: 292px;
    width: 100%;
    @media (max-width: $md1 + px) {
      max-width: 283px;
    }
    @media (max-width: $md3 + px) {
      max-width: 540px;
      margin: 0 auto;
    }
  }

  &-callback {
    max-width: 604px;
    width: 100%;
    @media (max-width: $md1 + px) {
      max-width: 589px;
    }
    @media (max-width: $md3 + px) {
      max-width: 540px;
      margin: 0 auto;
    }
  }
}

.estimate {
  &-title {
    margin: 0 0 40px;
    @media (max-width: $md3 + px) {
      text-align: center;
      text-transform: uppercase;
    }
  }

  &-row {
    & + & {
      margin: 20px 0 0;
    }
  }

  &-connection {
    margin: 40px 0 0;
  }

  &-subtitle {
    margin: 0 0 20px;
    @media (max-width: $md3 + px) {
      text-align: center;
      margin: 0 0 40px;
    }
  }

  &-checkboxes {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 40px;
    @media (max-width: $md3 + px) {
      max-width: 280px;
      margin: 0 auto;
      justify-content: center;
    }
  }

  &-btn {
    width: 164px;
    margin: 40px 0 0;
    @media (max-width: $md3 + px) {
      margin: 40px auto 0;
    }
  }
}

.callback {
  @media (min-width: $md1 + px) {
    margin: -60px 0 0;
  }

  &-img {
    @include img;
  }

  &-title {
    margin: 0 0 40px;
    @media (max-width: $md3 + px) {
      text-transform: uppercase;
      text-align: center;
    }
  }

  &-row {
    display: flex;
    gap: 20px;
    @media (max-width: $md3 + px) {
      flex-direction: column;
    }
  }

  &-btn {
    width: 168px;
    margin: 40px 0 0;
    @media (max-width: $md3 + px) {
      margin: 40px auto 0;
    }
  }
}

.dark .prices {
  color: $text-white;
}
</style>
