<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-about">
          <div class="footer-logo">
            <img src="@/assets/img/logo.svg" alt="Логотип" />
          </div>
          <p class="text text-medium">
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
        <div class="footer-contacts"></div>
        <div class="footer-address"></div>
      </div>
      <div class="footer-bottom">
        <div class="text text-medium">
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
    justify-content: space-between;
  }

  &-about {
    p {
      max-width: 292px;
    }

    @media (min-width: $md2 + px) {
      flex: 0 1 300px;
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
  }

  &-link {
    font-size: 14px;
    color: $text-white;
    transition: all 0.3s;
    @media (min-width: $md3 + px) {
      &:hover {
        color: $text-blue;
      }
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
