<script setup lang="ts">
const emit = defineEmits<{
  (e: 'toggleSearch', value: boolean): void
}>()
const onOpen = () => {
  emit('toggleSearch', true)
}
</script>

<template>
  <div class="search" @click="onOpen">
    <IconsSearch />
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.search {
  color: $text-secondary;
  margin-left: auto;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $bg-white;
  border-radius: 16px;
  cursor: pointer;

  svg {
    flex-shrink: 0;
    pointer-events: none;
  }
}

.dark .search {
  color: $text-white;
  background: $bg-white-alpha-5;
}
</style>
