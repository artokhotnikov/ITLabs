<script setup lang="ts"></script>

<template>
  <section class="section discussion">
    <div class="container">
      <div class="discussion-list">
        <HomeDiscussionProject />
        <HomeDiscussionTelegram />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.discussion {
  &-list {
    max-width: 1020px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 60% auto;
    gap: 20px;
    @media (max-width: $md3 + px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
