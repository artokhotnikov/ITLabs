<script setup lang="ts">
import type { Ref } from 'vue'

const files: Ref<FileList | null> = ref(null)
const onChangeFiles = (e: Event) => {
  files.value = (e.target as HTMLInputElement).files
}
</script>

<template>
  <div class="files">
    <div class="files-icon">
      <IconsClip />
      <input type="files" @change="onChangeFiles" />
    </div>
    <div v-if="files" class="files-name">name files</div>
    <div v-if="files" class="files-delete">
      <IconsClose />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.files {
  &-icon {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    min-height: 24px;
    background-color: $bg-white;
    border-radius: 4px;
    padding: 2px;

    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }

  &-name {
  }

  &-delete {
  }
}
</style>
