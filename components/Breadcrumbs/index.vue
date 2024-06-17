<script lang="ts" setup>
interface BreadCrumb {
  path: string
  title: string
}
interface Props {
  breadcrumbs: BreadCrumb[]
}

defineProps<Props>()
</script>

<template>
  <nav id="breadcrumbs" class="breadcrumbs" aria-label="Breadcrumb">
    <ul class="breadcrumbs-list">
      <li class="breadcrumbs-link medium">
        <NuxtLink to="/"> Главная </NuxtLink>
      </li>
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumbs-link medium"
      >
        <NuxtLink :to="'/' + breadcrumb.path">
          {{ breadcrumb.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '/assets/scss/variables';
.breadcrumbs {
  margin: 20px 0 40px;
  &-list {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  &-link {
    color: $text-blue;
    display: flex;
    align-items: center;
    gap: 8px;
    &:not(:last-child):after {
      content: '/';
      display: block;
      color: $text-third;
    }
    &:last-child {
      color: $text-third;
      pointer-events: none;
    }
  }
}
</style>
