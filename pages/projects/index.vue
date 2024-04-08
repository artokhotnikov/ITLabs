<script setup lang="ts">
import projects from '~/data/projects'

definePageMeta({
  title: 'Проекты'
})
useHead({
  title: 'Проекты'
})

const router = useRouter()
</script>

<template>
  <div class="page projects">
    <div class="container">
      <Breadcrumbs />
      <h1 class="projects-title title">Проекты</h1>
      <div class="projects-list">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project"
          :style="{ backgroundImage: 'url(' + project.imageCard + ')' }"
          @click="router.push(`/projects/${project.id}`)"
        >
          <div class="project-content">
            <div class="project-type text text-md">
              {{ project.type }}
            </div>
            <div class="project-title title title-xxs">
              {{ project.title }}
            </div>
            <div class="project-description text text-md">
              {{ project.description }}
            </div>
            <Button class="project-btn">Подробнее</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.projects-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: $md2 + px) {
    gap: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: $md3 + px) {
    grid-template-columns: 1fr;
  }
}

.project {
  width: 100%;
  max-width: 395px;

  &-content {
    max-width: 440px;
  }

  @media (max-width: $md1 + px) {
    max-width: 300px;
  }
  @media (max-width: $md2 + px) {
    max-width: 100% !important;
  }
}

.project:nth-child(5n + 2) {
  max-width: 293px;
  @media (max-width: $md1 + px) {
    max-width: 275px;
  }
}

.project:nth-child(5n + 3) {
  max-width: 500px;
  @media (max-width: $md1 + px) {
    max-width: 305px;
  }
}

.project:nth-child(5n + 4) {
  max-width: 500px;
  @media (max-width: $md1 + px) {
    max-width: 390px;
  }
}

.project:nth-child(5n + 5) {
  max-width: 708px;
  @media (max-width: $md1 + px) {
    max-width: 510px;
  }
}

.projects {
  &-title {
    color: $text-blue;
    margin: 0 0 40px;
    @media (max-width: $md3 + px) {
      margin: 0 0 32px;
    }
  }
}

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
