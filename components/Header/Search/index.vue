<script setup lang="ts"></script>

<template>
  <div class="search">
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
}

.dark .search {
  color: $text-white;
  background: $bg-white-alpha-5;
}
</style>
