<script setup lang="ts">
const workTypes = ref([
  {
    id: 1,
    type: 'checkbox',
    label: 'Web-разработка',
    value: false
  },
  {
    id: 2,
    type: 'checkbox',
    label: 'Прикладная разработка',
    value: false
  },
  {
    id: 3,
    type: 'checkbox',
    label: 'Тестирование',
    value: false
  },
  {
    id: 4,
    type: 'checkbox',
    label: 'Продажи',
    value: false
  },
  {
    id: 5,
    type: 'checkbox',
    label: 'РМ',
    value: false
  },
  {
    id: 6,
    type: 'checkbox',
    label: 'Дизайн',
    value: false
  },
  {
    id: 7,
    type: 'checkbox',
    label: 'Маркетинг и продвижение',
    value: false
  }
])
const textarea = ref('')
const file = ref(null)
</script>

<template>
  <section class="team">
    <div class="team-form">
      <form class="form" @submit.prevent>
        <div class="form-title">
          <p class="title">Стань частью команды!</p>
          <p class="description">
            Если ты чувствуешь, что можешь дополнить нашу команду – заполняй
            форму и мы с тобой свяжемся. А если еще выбираешь – подпишись на
            наши вакансии <br />
            на hh — будь в курсе поисков.
          </p>
        </div>
        <div class="form-links">
          <NuxtLink href="/" class="link bold">Мы на hh.ru</NuxtLink>
          <NuxtLink href="/" class="link bold">+7 995 296 4335</NuxtLink>
          <NuxtLink href="/" class="link bold">info@itlabs.top</NuxtLink>
          <NuxtLink href="/" class="link bold">t.me/ITLabs_top</NuxtLink>
        </div>
        <div class="form-container">
          <div class="form-fields">
            <div class="user-info">
              <Input name="name" placeholder="Имя" color="primary" />
              <Input
                name="contacts"
                placeholder="Контакт для связи"
                color="primary"
              />
            </div>
            <div class="type-dev">
              <p class="bold">Ваше направление работы:</p>
              <div class="types">
                <Checkbox
                  v-for="type in workTypes"
                  :key="type.id"
                  v-model="type.value"
                  :type="type.type"
                  :label="type.label"
                  color="secondary"
                />
              </div>
            </div>
            <client-only>
              <Textarea
                v-model="textarea"
                name="textarea"
                color="primary"
                placeholder="Сопроводительное письмо"
                class="user-message"
              >
                <template #additional><InputFile v-model="file" /></template>
              </Textarea>
            </client-only>
          </div>
          <Button color="primary" class="form-send">Отправить</Button>
        </div>
      </form>
    </div>
    <NuxtImg src="/img/recruite/people.png" class="team-people" />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.team {
  display: flex;
  align-items: flex-end;
  gap: 40px;
  @media (max-width: $md3 + px) {
    flex-direction: column;
  }

  &-form {
    width: 100%;
    max-width: 604px;
  }

  &-people {
    max-width: 584px;
    max-height: 866px;
    @media (max-width: $md1 + px) {
      margin: 0 auto;
      max-width: 436px;
      max-height: 645px;
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 28px;

  &-title {
    display: flex;
    flex-direction: column;
    line-height: normal;
    gap: 8px;

    .title {
      font-size: 38px;
      color: $text-blue;
    }

    .description {
      white-space: pre-wrap;
    }
  }

  &-links {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;

    .link {
      background-color: white;
      border-radius: 16px;
      color: $text-secondary;
      padding: 10px;

      &:hover {
        color: $text-blue;
      }
    }
  }

  &-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &-fields {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .user {
      &-info {
        display: flex;
        gap: 20px;
        @media (max-width: $md1 + px) {
          flex-direction: column;
        }
      }

      &-message {
        min-height: 150px;
      }
    }

    .type-dev {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .types {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }
    }
  }

  &-send {
    max-width: 164px;
  }
}
</style>
