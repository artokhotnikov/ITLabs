<script setup lang="ts">
const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

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
          <NuxtLink href="/categories" class="footer-link medium">
            Услуги
          </NuxtLink>
          <NuxtLink href="/projects" class="footer-link medium">
            Проекты
          </NuxtLink>
          <NuxtLink href="/about" class="footer-link medium">
            О компании
          </NuxtLink>
          <NuxtLink href="/contacts" class="footer-link medium">
            Контакты
          </NuxtLink>
        </nav>
        <div class="footer-contacts">
          <h4 class="subtitle bold">
            <a href="tel:+79952964335">+7 995 296 4335</a>
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
            <Button
              color="secondary"
              class="footer-icon"
              outline
              @click="openLink('https://t.me/your_itlabs')"
            >
              <IconsTelegram />
            </Button>
            <Button
              color="secondary"
              class="footer-icon"
              outline
              @click="openLink('https://vk.com/your_itlabs')"
            >
              <IconsVK />
            </Button>
          </div>
          <ClientOnly>
            <ThemeSwitcher />
          </ClientOnly>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="text text-md">
          © 2024 «Лаборатория информационных&nbsp;технологий»
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
  border-radius: 40px 40px 0 0;

  &-top {
    display: flex;
    gap: 20px;
    @media (max-width: $md3 + px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 40px;
    }
  }

  &-about {
    p {
      max-width: 292px;
    }

    @media (min-width: $md2 + px) {
      flex: 0 1 400px;
    }
    @media (max-width: $md2 + px) {
      flex: 0 1 280px;
    }
    @media (max-width: $md3 + px) {
      flex-basis: auto;
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
    @media (max-width: $md2 + px) {
      flex: 0 1 120px;
    }
    @media (max-width: $md3 + px) {
      flex-basis: auto;
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

    @media (min-width: $md3 + px) {
      flex: 0 1 290px;
    }
    @media (max-width: $md3 + px) {
      flex-basis: auto;
    }
  }

  &-address {
    .text {
      margin: 0 0 8px;
    }

    @media (min-width: $md2 + px) {
      flex: 0 1 188px;
    }
    @media (max-width: $md2 + px) {
      flex: 0 1 130px;
    }
    @media (max-width: $md3 + px) {
      flex-basis: auto;
    }
  }

  &-social {
    margin: 40px 0 0;
    display: flex;
    gap: 16px;
    @media (max-width: $md3 + px) {
      justify-content: center;
    }
  }

  &-icon {
    height: 32px !important;
    width: 32px !important;
    padding: 0 !important;
    border-radius: 8px !important;

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

.switcher {
  margin: 40px 0 0;
  @media (max-width: $md3 + px) {
    margin: 40px auto 0;
  }
}
</style>
