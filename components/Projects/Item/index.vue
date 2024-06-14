<script setup lang="ts">
import type Project from '~/types/Projects/Project'
import { useContentStore } from '~/store/contentStore'

interface ProjectProps {
  project: Project
  small?: boolean
}

defineProps<ProjectProps>()
const emits = defineEmits(['onClick'])
const { URL } = useContentStore()
</script>

<template>
  <div
    v-if="project"
    :class="['project', { small: small }]"
    :style="{ backgroundImage: 'url(' + URL + project.imageCard + ')' }"
    @click="emits('onClick')"
  >
    <div class="project-content">
      <div class="project-type text text-md">
        {{ project.type }}
      </div>
      <div class="project-title title title-xxs">
        {{ project.title }}
      </div>
      <div
        v-if="project.description"
        class="project-description text text-md"
        v-html="project.description"
      />
      <Button class="project-btn" :small="small"> Подробнее </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.project {
  padding: 30px;
  border-radius: 20px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &.small {
    padding: 16px;
    border-radius: 14px;

    .project-btn {
      width: 100%;
    }
  }

  @media (min-width: $md2 + px) {
    &:hover {
      .project-content {
        opacity: 1;
      }

      &:before {
        opacity: 1;
      }
    }
  }

  @media (max-width: $md3 + px) {
    min-height: 330px;
  }

  &:before {
    content: '';
    inset: 0;
    position: absolute;
    display: block;
    transition: opacity 0.3s linear;
    background: linear-gradient(
      90deg,
      rgba(45, 55, 68, 1) 0%,
      rgba(45, 55, 68, 0.6) 100%
    );
    @media (min-width: $md2 + px) {
      opacity: 0;
    }
  }

  &-content {
    margin-top: auto;
    position: relative;
    transition: opacity 0.3s linear;
    @media (min-width: $md2 + px) {
      opacity: 0;
    }
  }

  &-type {
    color: $text-white-alpha;
    text-transform: capitalize;
  }

  &-title {
    color: $text-blue;
    margin: 8px 0 20px;
    @media (max-width: $md3 + px) {
      margin: 2px 0 10px;
    }
  }

  &-description {
    color: $text-white;
  }

  &-btn {
    margin: 40px 0 0;
    width: 170px;
    @media (max-width: $md3 + px) {
      margin: 20px 0 0;
    }
  }
}
</style>
