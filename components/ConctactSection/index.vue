<script setup lang="ts">
import { useModalsStore } from '~/store/modalsStore'

const modalsStore = useModalsStore()
</script>

<template>
  <section class="contact section-md">
    <div class="container">
      <h2 class="title title-xs">
        Остались вопросы или хотите уточнить важные моменты?
      </h2>
      <div class="text medium">
        Воспользуйтесь формой “Задать вопрос”, позвоните или напишите нам
      </div>
      <div class="contact-links">
        <div class="subtitle bold">
          <a href="tel:+79511929402">+7 951 192 94 02</a>
        </div>
        <div class="subtitle bold">
          <a href="mailto:info@itlabs.top"> info@itlabs.top</a>
        </div>
      </div>
      <Button
        class="contact-btn"
        @click="modalsStore.open('discussionDiscussion')"
      >
        Обсудить проект
      </Button>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.dark {
  .contact {
    &-links,
    .text {
      color: $text-white;
    }
  }
}

.contact {
  padding-bottom: 0;
  text-align: center;

  &-links {
    display: flex;
    gap: 20px;
    justify-content: center;
    color: $text-secondary;
  }

  &-btn {
    width: 212px;
    margin: 40px auto 0;
  }

  .title {
    color: $text-blue;
    max-width: 800px;
    margin: 0 auto 40px;
  }

  .text {
    color: $text-secondary;
    margin: 0 0 20px;
  }

  .subtitle {
  }
}
</style>
