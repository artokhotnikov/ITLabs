<script setup lang="ts"></script>

<template>
  <section class="height">
    <div class="height-title">
      <p class="title title-md">Неограниченные возможности карьерного роста</p>
    </div>
    <div class="height-slider">
      <RecruiteProjects class="projects" />
      <RecruiteProjectsMobile class="projects-mobile" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.height {
  color: $text-blue;
  text-align: center;

  &-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: $md3 + px) {
      position: relative;
      height: 455px;
      top: 50px;
    }
  }
}

.projects {
  @media (max-width: $md3 + px) {
    display: none;
  }

  &-mobile {
    display: none;
    @media (max-width: $md3 + px) {
      display: block;
      top: 500px;
    }
  }
}
</style>
