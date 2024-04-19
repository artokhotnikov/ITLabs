<script setup lang="ts">
definePageMeta({
  title: 'Контакты'
})
useHead({
  title: 'Контакты'
})

const show = ref(false)
onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 500)
})
</script>

<template>
  <div class="page">
    <div class="container">
      <Breadcrumbs />
      <div class="page-title title">Контакты</div>
      <div v-show="show" class="map">
        <YandexMap />
        <div class="contact">
          <h2 class="contact-title title title-xxs">
            Офис
            <mark>в Ижевске</mark>
          </h2>
          <div class="contact-subtitle text">
            Ул. Холмогорова, 85, Ижевск, 426011
          </div>
          <div class="contact-row">
            <span> Офис </span>
            <span>
              <a href="tel:+7(3412) 000-000" target="_blank">
                +7(3412) 000-000
              </a>
            </span>
          </div>
          <div class="contact-row">
            <span> E-mail </span>
            <span>
              <a href="mailto:info@itlabs.top" target="_blank">
                info@itlabs.top
              </a>
            </span>
          </div>
          <div class="contact-row">
            <span> Telegtam </span>
            <span>
              <a href="https://@itlabs" target="_blank">@itlabs</a>
            </span>
          </div>
          <div class="contact-row">
            <span> VK </span>
            <span>
              <a href="https://your_itlabs" target="_blank">your_itlabs</a>
            </span>
          </div>
          <div class="contact-link medium">
            <a href="#">Реквизиты компании</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.page {
  &-title {
    color: $text-blue;
    margin: 0 0 40px;
  }
}

.map {
  width: 100%;
  height: 790px;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  @media (max-width: $md3 + px) {
    height: 790px;
    border-radius: 0;
    margin: 0 calc(50% - 50vw);
    width: 100vw;
  }
}

.contact {
  position: absolute;
  top: 50%;
  left: 210px;
  transform: translateY(-50%);
  background: $bg-white;
  padding: 40px;
  border-radius: 40px;
  box-shadow: 0 50px 50px 0 rgba(88, 104, 124, 0.1);
  @media (max-width: $md3 + px) {
    left: 16px;
    top: auto;
    transform: translateY(0);
    bottom: 16px;
    border-radius: 20px;
    width: calc(100% - 32px);
  }

  &-title {
    margin: 0 0 40px;
    @media (max-width: $md3 + px) {
      margin: 0 0 32px;
    }
  }

  &-subtitle {
    margin: 0 0 40px;
    color: $text-third;
    @media (max-width: $md3 + px) {
      margin: 0 0 32px;
    }
  }

  &-row {
    display: flex;
    justify-content: space-between;
    @media (min-width: $md2 + px) {
      min-width: 314px;
    }

    &:not(:first-child) {
      margin: 20px 0 0;
      @media (max-width: $md3 + px) {
        margin: 16px 0 0;
      }
    }

    span {
      &:first-child {
        font-weight: 500;
        color: $text-secondary;
      }

      &:last-child {
        color: $text-third;
        flex: 0 0 152px;
        @media (max-width: $md3 + px) {
          flex: 0 1 180px;
        }
      }
    }
  }

  &-link {
    margin: 40px 0 0;
    color: $text-blue;
  }
}
</style>
