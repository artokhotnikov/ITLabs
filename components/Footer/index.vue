<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-about">
          <div class="footer-logo">
            <img src="@/assets/img/logo.svg" alt="Логотип" />
          </div>
          <p class="text text-md">
            <b>ITL Лаборатория Информационных технологий</b> — ведущий
            отечественный разработчик программного обеспечения
          </p>
        </div>
        <nav class="footer-menu">
          <NuxtLink href="/ui" class="footer-link medium">Решения</NuxtLink>
          <NuxtLink href="/" class="footer-link medium">Услуги</NuxtLink>
          <NuxtLink href="/" class="footer-link medium">Проекты</NuxtLink>
          <NuxtLink href="/" class="footer-link medium">О компании</NuxtLink>
          <NuxtLink href="/" class="footer-link medium">Партнеры</NuxtLink>
        </nav>
        <div class="footer-contacts">
          <h4 class="subtitle bold">
            <a href="tel:+79511929402">+7 951 192 94 02</a>
          </h4>
          <div class="text text-md">Многоконтактный телефон</div>
          <h4 class="subtitle bold">
            <a href="mailto:info@itlabs.top">info@itlabs.top</a>
          </h4>
          <div class="text text-md">Электронная почта</div>
        </div>
        <div class="footer-address">
          <div class="text text-md bold">Офис</div>
          <div class="text text-md">Ул. Холмогорова, 85, Ижевск, 426011</div>
          <div class="footer-social">
            <Button color="secondary" class="footer-icon" outline>
              <IconsTelegram />
            </Button>
            <Button color="secondary" class="footer-icon" outline>
              <IconsVK />
            </Button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="text text-md">
          © 2024 «Лаборатория информационных технологий»
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.footer {
  padding: 40px 0;
  background: $text-secondary;
  color: $text-white;

  &-top {
    display: flex;
    gap: 20px;
    //justify-content: space-between;
  }

  &-about {
    p {
      max-width: 292px;
    }

    @media (min-width: $md2 + px) {
      flex: 0 1 400px;
    }
  }

  &-logo {
    padding: 10px 20px;
    border-radius: 13px;
    background: $bg-blue;
    display: inline-block;
    margin: 0 0 40px;
  }

  &-menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: $md2 + px) {
      flex: 0 1 188px;
    }
  }

  &-link {
    font-size: 14px;
  }

  &-contacts {
    .subtitle {
      margin: 0 0 8px;
    }

    .text + .subtitle {
      margin: 40px 0 8px;
    }

    @media (min-width: $md2 + px) {
      flex: 0 1 290px;
    }
  }

  &-address {
    .text {
      margin: 0 0 8px;
    }

    @media (min-width: $md2 + px) {
      flex: 0 1 188px;
    }
  }

  &-social {
    margin: 40px 0 0;
    display: flex;
    gap: 16px;
  }

  &-icon {
    height: 32px;
    width: 32px;
    padding: 0;
    border-radius: 8px;

    svg {
      flex: 0 0 20px;
      height: 20px;
    }
  }

  &-bottom {
    border-top: 1px solid $text-third;
    padding-top: 40px;
    margin-top: 40px;
    text-align: center;
  }
}
</style>
