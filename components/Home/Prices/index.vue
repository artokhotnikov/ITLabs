<script setup lang="ts">
const estimate = ref({
  name: '',
  phone: '',
  email: '',
  connection: {
    telegram: true,
    whatsapp: false,
    email: false,
    phone: false
  }
})

const callback = ref({
  name: '',
  phone: ''
})
</script>

<template>
  <section class="section prices">
    <div class="container">
      <h2 class="prices-title title">Цены</h2>
      <div class="prices-list">
        <div class="prices-estimate">
          <form class="estimate">
            <div class="estimate-title subtitle bold">
              Рассчитайте
              <mark>смету</mark>
              проекта
            </div>
            <div class="estimate-row">
              <Input
                v-model="estimate.name"
                placeholder="Имя"
                type="text"
                color="primary"
              />
            </div>
            <div class="estimate-row">
              <Input
                v-model="estimate.phone"
                placeholder="Телефон"
                type="text"
                color="primary"
              />
            </div>
            <div class="estimate-row">
              <Input
                v-model="estimate.email"
                placeholder="E-mail"
                type="text"
                color="primary"
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
          </form>
        </div>
        <div class="prices-callback">
          <form class="callback">
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
                v-model="callback.name"
                placeholder="Имя"
                type="text"
                color="primary"
              />
              <Input
                v-model="callback.phone"
                placeholder="Телефон"
                type="text"
                color="primary"
              />
            </div>
            <Button class="callback-btn">Записаться</Button>
          </form>
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
