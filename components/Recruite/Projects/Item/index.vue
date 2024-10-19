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
    <div class="item-img">
      <NuxtPicture :src="URL + item.imageCard" :alt="item.title" />
    </div>
    <input
      :id="String(item.id)"
      type="radio"
      name="slide"
      :checked="active === idx"
    />
    <label :for="String(item.id)" class="card" @mouseenter="onMouseEnter">
      <span class="description">
        <span class="title title-xs">{{ item.title }}</span>
        <span class="card-text text text-md" v-html="item.description" />
      </span>
    </label>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.item {
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  @media (max-width: 959px) {
    border-radius: 16px;
  }

  &-img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    :deep(img) {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
}

span {
  display: block;
}

.card {
  height: 100%;
  padding: 40px 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 84px;
  transition-delay: 0.3s;
  cursor: pointer;
  overflow: hidden;
  transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
  flex-grow: 1;
  position: relative;
  @media (max-width: 959px) {
    padding: 24px 24px 17px;
    width: 100%;
    height: 84px;
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
  max-width: 60%;
  @media (max-width: ($md3 + px)) {
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
    @media (max-width: ($md1 + px)) {
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
