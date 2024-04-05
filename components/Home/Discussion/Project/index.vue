<script setup lang="ts">
import { useModalsStore } from '~/store/modalsStore'

const modalsStore = useModalsStore()
</script>

<template>
  <div class="project">
    <h4 class="title title-xs">Хотите обсудить проект?</h4>
    <div class="text text-md">Консультация и оценка бесплатно</div>
    <Button
      class="project-btn"
      color="secondary"
      outline
      @click="modalsStore.open('discussionDiscussion')"
    >
      Связаться с нами
    </Button>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.project {
  padding: 42px 40px;
  border-radius: 40px;
  color: $text-white;
  background: $text-secondary url('/assets/img/discussion/itl_pattern.png') top
    right / 400px no-repeat;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  &-btn {
    margin-top: auto;
    width: 211px;
  }
  .title {
    margin: 0 0 20px;
  }

  .text {
    margin: 0 0 40px;
  }
}
</style>
