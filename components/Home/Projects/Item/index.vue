<script setup lang="ts">
import type Project from '~/types/Projects/Project'
import { useContentStore } from '~/store/contentStore'

export interface itemProps {
  item: Project
  idx: number | string
  active: number
}

const props = defineProps<itemProps>()
const emits = defineEmits(['update:active'])
const router = useRouter()
const onMouseEnter = () => {
  emits('update:active', props.idx)
}

const { URL } = useContentStore()
</script>

<template>
  <div class="item">
    <input :id="item.id" type="radio" name="slide" :checked="active === idx" />
    <label
      :for="item.id"
      class="card"
      :style="{ backgroundImage: 'url(' + URL + item.imageCard + ')' }"
      @mouseenter="onMouseEnter"
    >
      <span class="description">
        <span class="card-subtitle text text-md">{{ item.type }}</span>
        <span class="title title-xs">{{ item.title }}</span>
        <span class="card-text text text-md" v-html="item.description" />
      </span>
      <span class="card-footer">
        <span class="card-idx subtitle bold">{{ +idx + 1 }}</span>
        <Button class="card-btn" @click="router.push(`/projects/${item.id}`)">
          Подробнее
        </Button>
      </span>
    </label>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

span {
  display: block;
}

.card {
  height: 100%;
  padding: 40px 17px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 84px;
  transition-delay: 0.3s;
  cursor: pointer;
  overflow: hidden;
  transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
  flex-grow: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media (max-width: 959px) {
    padding: 24px 24px 17px;
    width: 100%;
    height: 84px;
    border-radius: 16px;
  }

  &:before {
    content: '';
    inset: 0;
    position: absolute;
    display: block;
    background: linear-gradient(
      90deg,
      rgba(45, 55, 68, 1) 0%,
      rgba(45, 55, 68, 0) 100%
    );
  }

  &-subtitle {
    text-transform: capitalize;
    color: $text-white-alpha;
  }

  .title {
    color: $text-blue;
    margin: 8px 0 20px;
  }

  &-text {
    color: $text-white;
    max-width: 360px;
  }

  &-footer {
    display: flex;
    align-items: center;
    gap: 34px;
    padding-top: 40px;
    position: relative;
  }

  &-idx {
    height: 50px;
    flex: 0 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-white;
    background: $bg-white-alpha-10;
    border-radius: 50%;
  }

  &-btn {
    width: 170px;
    @media (max-width: 959px) {
      opacity: 0;
      pointer-events: none;
    }
  }
}

.row {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.description {
  overflow: hidden;
  opacity: 0;
  transition-delay: 0.3s;
  transition: all 0.3s ease;
  position: relative;
  max-width: 360px;
  @media (max-width: $md3 + px) {
    max-width: 240px;
  }
}

input {
  display: none;
}

input:checked {
  & + .card {
    padding: 40px;
    width: 812px;
    @media (max-width: $md1 + px) {
      width: 480px;
    }
    @media (max-width: 959px) {
      height: auto;
      width: 100%;
      padding: 64px 24px 24px;
      .card-btn {
        opacity: 1;
        pointer-events: all;
      }
    }

    .card-subtitle {
      height: auto;
    }

    .title {
      height: auto;
    }

    .card-text {
      height: auto;
    }
  }
}

input:checked + .card .description {
  opacity: 1 !important;
}
</style>
