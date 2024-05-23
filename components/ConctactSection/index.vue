<script setup lang="ts"></script>

<template>
  <section class="contact section-md">
    <div class="container">
      <div class="contact-container">
        <h2 class="title title-md">Остались вопросы?</h2>
        <h3 class="title title-xs">
          Позвоните <br />
          или напишите нам
        </h3>
        <div class="contact-links">
          <div class="subtitle bold">
            <a href="tel:+79511929402">+7 951 192 94 02</a>
          </div>
          <div class="subtitle bold">
            <a href="mailto:info@itlabs.top"> info@itlabs.top</a>
          </div>
        </div>
        <div class="contact-img">
          <img src="@/assets/img/callback.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.dark {
  .contact {
    &-links {
      color: $text-primary;
    }

    .title-xs {
      color: $text-white;
    }
  }
}

.contact {
  padding: 160px 0;
  overflow: hidden;
  @media (max-width: $md2 + px) {
    padding: 45px 0;
    text-align: center;
  }

  &-container {
    position: relative;
    max-width: 1020px;
    margin: 0 auto;
  }

  &-links {
    margin: 40px 0 0;
    display: flex;
    gap: 20px;
    color: $text-secondary;
    @media (max-width: $md2 + px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: 20px 0 0;
    }
  }

  &-img {
    @include img;
    max-width: 320px;
    display: none;
    @media (min-width: $md2 + px) {
      display: block;
      max-width: 604px;
      position: absolute;
      right: -100px;
      top: -167px;
    }

    @media (min-width: $md1 + px) {
      right: 0;
    }
  }

  .title-md {
    color: $text-blue;
    margin: 0 0 8px;
    @media (max-width: $md4 + px) {
      font-size: 22px;
    }
  }

  .title-xs {
    color: $text-secondary;
    @media (min-width: $md3 + px) {
      br {
        display: none;
      }
    }
  }

  .text {
    color: $text-secondary;
    margin: 0 0 20px;
  }

  .subtitle {
    width: 190px;
    padding: 10px;
    border-radius: 16px;
    background: $bg-white;
    text-align: center;
    @media (max-width: $md2 + px) {
      width: auto;
      padding: 8px 16px;
      text-transform: uppercase;
    }
  }
}
</style>
