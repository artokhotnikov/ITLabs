<script setup lang="ts">
import { useSearchStore } from '~/store/searchStore'

interface Props {
  isOpen: boolean
}

const router = useRouter()
const searchStore = useSearchStore()
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'toggleSearch', value: boolean): void
}>()

const searchString = ref('')
const inputRef = ref<any>(null)

const onClose = () => {
  emit('toggleSearch', false)
}

const fetchData = useDebounceFn(async () => {
  await searchStore.getSearchData(searchString.value)
}, 500)

const onInput = async () => {
  await fetchData()
}

const onRouter = (string: string) => {
  onClose()
  router.push(string)
}

watch(
  () => props.isOpen,
  (value) => {
    if (value) {
      setTimeout(() => {
        if (inputRef.value) {
          inputRef.value.inputRef.focus()
        }
      }, 50)
    }
  }
)
</script>

<template>
  <div :class="['search', { active: isOpen }]">
    <div class="search-input">
      <Input
        ref="inputRef"
        v-model="searchString"
        class="search-input"
        name="search"
        color="secondary"
        placeholder="Поиск"
        @input="onInput"
      />
      <IconsClose class="search-close" @click="onClose" />
    </div>
    <div
      v-if="searchStore.searchData && searchString.length"
      class="search-results"
    >
      <div class="search-data">
        <div v-if="searchStore.searchData.project?.length" class="search-row">
          <div class="search-title title title-xxs">Проекты</div>
          <div class="search-list">
            <div
              v-for="project in searchStore.searchData.project"
              :key="project.id"
              class="search-item text"
              @click="onRouter(`/projects/${project.slug}`)"
            >
              {{ project.title }}
            </div>
          </div>
        </div>
        <div
          v-if="searchStore.searchData.projectCategory?.length"
          class="search-row"
        >
          <div class="search-title title title-xxs">Услуги</div>
          <div class="search-list">
            <div
              v-for="project in searchStore.searchData.projectCategory"
              :key="project.id"
              class="search-item text"
              @click="onRouter(`/categories/${project.slug}`)"
            >
              {{ project.title }}
            </div>
          </div>
        </div>
        <div
          v-if="
            !searchStore.searchData.project?.length &&
            !searchStore.searchData.projectCategory?.length
          "
          class="subtitle"
        >
          Ничего не найдено
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.dark {
  .search {
    color: $text-white;

    &-input {
      background: $bg-dark;
    }

    &-results {
      background-color: $bg-white-alpha-5;
      position: relative;

      &:before {
        content: '';
        background: $bg-dark;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 16px;
      }
    }
  }
}

.search {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  transform: translateY(-200%);
  transition: transform 0.3s linear;

  &.active {
    transform: translateY(0);
  }

  &-input {
    position: relative;
    background: $bg-white;
    border-radius: 16px;
  }

  &-close {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  &-results {
    margin: 12px 0 0;
    padding: 20px;
    border-radius: 16px;
    background: $bg-white;
  }

  &-data {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-row {
  }

  &-title {
    margin: 0 0 8px;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  &-item {
    cursor: pointer;
    display: inline;
    transition: color 0.1s linear;

    &:hover {
      color: $text-blue;
    }
  }

  &-helper {
  }
}
</style>
