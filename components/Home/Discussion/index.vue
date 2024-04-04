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
.discussion {
  &-list {
    max-width: 1020px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 60% auto;
    gap: 20px;
  }
}
</style>
