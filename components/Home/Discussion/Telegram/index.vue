<script setup lang="ts"></script>

<template>
  <div class="telegram">
    <div class="subtitle bold">
      <IconsTelegram />
      Телеграм-канал ITL
    </div>
    <div class="text text-md">
      Новости, полезные материалы и статьи от экспертов индустрии
    </div>
    <Button class="telegram-btn" color="secondary" outline> Подписаться</Button>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.telegram {
  padding: 42px 40px;
  border-radius: 40px;
  color: $text-white;
  background: url('/assets/img/discussion/gradient.png') center/ cover no-repeat;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  &-btn {
    margin-top: auto;
    width: 180px;
  }

  .subtitle {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0 0 20px;
  }

  .text {
    margin: 0 0 40px;
  }
}
</style>
