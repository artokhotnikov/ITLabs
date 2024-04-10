<script setup lang="ts">
definePageMeta({
  title: 'Руководство'
})
useHead({
  title: 'Руководство'
})

const callback = ref({
  name: '',
  phone: '',
  text: '',
  connection: {
    telegram: true,
    whatsapp: false,
    email: false,
    phone: false
  }
})
</script>

<template>
  <div class="page management">
    <div class="container">
      <Breadcrumbs />
      <h1 class="management-title title">Руководство</h1>
      <section class="seo">
        <div class="seo-content">
          <h3 class="seo-title title title-xs">Сергей Черницын</h3>
          <div class="seo-subtitle subtitle bold">Генеральный директор</div>
          <div class="seo-text text text-md">
            Более 7-ми лет мы занимаемся разработкой прикладных решений для
            сенорных устройств и устройств самообслуживания.
            <br /><br />
            Осваивая новые технологии и решения я чувствую как мы приближаем
            будущее — время когда использоване современных умных устройств
            станет доступно людям любого возраста и поколения.
            <br /><br />
            Наша миссия — приблизить это будущее и сформировать комфортную
            пользовательскую среду для каждого.
          </div>
        </div>
        <div class="seo-img">
          <img src="/img/management_page/serega.jpg" alt="" />
        </div>
      </section>
      <section class="section">
        <div class="callback">
          <div class="callback-header">
            <div class="callback-title title title-s">
              Написать руководителю
            </div>
            <div class="callback-text text medium">
              Оставьте свое имя и контакты, чтобы мы могли с вами связаться
            </div>
          </div>
          <form class="callback-form">
            <div class="callback-row">
              <Input
                v-model="callback.name"
                placeholder="Имя"
                type="text"
                color="secondary"
              />
            </div>
            <div class="callback-row">
              <Input
                v-model="callback.phone"
                placeholder="Телефон"
                type="text"
                color="secondary"
              />
            </div>
            <div class="callback-row">
              <Input
                v-model="callback.text"
                placeholder="Текст обращения к руководителю"
                type="text"
                color="secondary"
              />
            </div>
            <div class="callback-connection">
              <div class="callback-subtitle text medium">
                Предпочтительный вид связи:
              </div>
              <div class="callback-checkboxes">
                <Checkbox
                  v-model="callback.connection.telegram"
                  type="checkbox"
                  label="Telegram"
                  color="secondary"
                />
                <Checkbox
                  v-model="callback.connection.whatsapp"
                  type="checkbox"
                  label="WhatsApp"
                  color="secondary"
                />
                <Checkbox
                  v-model="callback.connection.email"
                  type="checkbox"
                  label="Email"
                  color="secondary"
                />
                <Checkbox
                  v-model="callback.connection.phone"
                  type="checkbox"
                  label="По телефону"
                  color="secondary"
                />
              </div>
            </div>
            <Button class="callback-btn">Отправить</Button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.title {
  color: $text-blue;
}

.management {
  color: $text-secondary;

  &-title {
    margin: 0 0 20px;
    @media (max-width: $md1 + px) {
      margin: 0 0 40px;
    }
    @media (max-width: $md3 + px) {
      margin: 0 0 32px;
    }
  }
}

.seo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: 920px;
  margin: 0 auto 60px;
  @media (max-width: $md3 + px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 64px;
    margin: 0 0 32px;
  }

  &-title {
    margin: 0 0 8px;
  }

  &-subtitle {
    margin: 0 0 40px;
    @media (max-width: $md3 + px) {
      margin: 0 0 32px;
    }
  }

  &-text {
  }

  &-content {
    @media (min-width: $md3 + px) {
      max-width: 436px;
    }
    @media (min-width: $md1 + px) {
      max-width: 396px;
    }
  }

  &-img {
    @include img;
    border-radius: 20px;
    overflow: hidden;

    @media (min-width: $md3 + px) {
      max-width: 436px;
    }
    @media (min-width: $md1 + px) {
      max-width: 396px;
    }
    @media (max-width: $md3 + px) {
      margin: 0 auto;
      img {
        max-width: 430px;
      }
    }
  }
}

.callback {
  padding: 40px;
  border-radius: 40px;
  background: $bg-primary;
  max-width: 788px;
  margin: 0 auto;
  box-shadow: 0 50px 50px 0 rgba(88, 104, 124, 0.1);
  @media (max-width: $md3 + px) {
    border-radius: 20px;
    padding: 40px 18px;
  }

  &-header {
    margin: 0 0 40px;
    text-align: center;
    padding: 0 24px;
  }

  &-title {
    margin: 0 0 16px;
  }

  &-text {
  }

  &-form {
    max-width: 292px;
    margin: 0 auto;
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
    margin: 40px auto 0;
  }
}
</style>
