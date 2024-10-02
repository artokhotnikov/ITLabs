<script setup lang="ts">
import clients from '~/data/clients'
</script>

<template>
  <section class="section clients">
    <h2 class="section-title title title-s">Наши клиенты</h2>
    <div class="clients-list">
      <div v-for="client in clients" :key="client.id" class="client">
        <img :src="client.imageMono" :alt="client.title" />
        <img :src="client.imageNormal" :alt="client.title" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.title {
  color: $text-blue;
  text-align: center;
  margin: 0 0 40px;
}

.clients {
  &-list {
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
    justify-content: center;
    align-items: center;
    @media (max-width: ($md3 + px)) {
      gap: 32px;
    }
  }
}

.client {
  @include img;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ($md3 + px)) {
    max-width: 150px;
    &:nth-child(7) {
      max-width: 196px;
    }
  }

  &:hover {
    img {
      &:first-child {
        opacity: 0;
      }

      &:last-child {
        opacity: 1;
      }
    }
  }

  img {
    transition: opacity 0.3s ease-in-out;

    &:first-child {
      opacity: 1;
    }

    &:last-child {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  }
}
</style>
