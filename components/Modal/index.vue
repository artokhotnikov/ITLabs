<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

interface ModalEmits {
  (eventName: 'close'): void
}
const emits = defineEmits<ModalEmits>()
const { lock, unlock } = useBodyLock()

onMounted(lock)
onBeforeUnmount(unlock)
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <slot name="content" />
    </div>
    <PageOverlay @on-click="emits('close')" />
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.modal {
  position: fixed;
  inset: 0;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    position: relative;
    z-index: 6;
    width: 100%;
    max-width: 396px;
    border-radius: 40px;
    background-color: $bg-white;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
