<script setup lang="ts">
import type Solution from '~/types/Solution/Solution'

interface SolutionProps {
  solution: Solution
}

defineProps<SolutionProps>()
const router = useRouter()
</script>

<template>
  <div
    v-if="solution"
    class="solution"
    @click="router.push(`/solutions/${solution.id}`)"
  >
    <div class="solution-img">
      <NuxtImg
        :src="solution.imageCover"
        loading="lazy"
        sizes="160px lg:283px xl:293px"
      />
    </div>
    <div class="text bold" v-html="solution.title" />
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.solution {
  display: flex;
  flex-direction: column;
  padding: 0 0 40px;
  border-radius: 40px;
  background: $bg-white-alpha-20;
  cursor: pointer;
  transition: all 0.5s linear;
  position: relative;
  text-align: center;
  color: $text-secondary;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: $bg-gradient;
    border-radius: 40px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s linear;
  }

  &-img {
    img {
      width: 100%;
    }
  }

  .text {
    margin-top: auto;
    padding: 0 20px;
    @media (max-width: $md3 + px) {
      padding: 0 16px;
    }
  }

  @media (min-width: $md3 + px) {
    &:hover {
      background: none;
      color: $text-white;

      &:before {
        opacity: 1;
      }
    }
  }
  @media (max-width: $md3 + px) {
    padding: 0 0 16px;
    border-radius: 20px;
  }
}
</style>
