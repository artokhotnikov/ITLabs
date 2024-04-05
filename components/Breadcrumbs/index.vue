<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const getBreadcrumbs = () => {
  const fullPath = route.path
  const requestPath = fullPath.startsWith('/')
    ? fullPath.substring(1)
    : fullPath
  const crumbs = requestPath.split('/')
  const breadcrumbs: Array<any> = []
  let path = ''
  crumbs.forEach((crumb) => {
    if (crumb) {
      path = `${path}/${crumb}`
      const breadcrumb = router.getRoutes().find((r) => r.path === path)
      if (breadcrumb) {
        breadcrumbs.push(breadcrumb)
      }
    }
  })
  return breadcrumbs
}
const ariaCurrent = (index: number) =>
  index === getBreadcrumbs().length - 1 ? 'page' : 'false'
</script>

<template>
  <nav id="breadcrumbs" class="breadcrumbs" aria-label="Breadcrumb">
    <ul class="breadcrumbs-list">
      <li class="breadcrumbs-link">
        <NuxtLink to="/" :aria-current="ariaCurrent(-1)"> Главная </NuxtLink>
      </li>
      <li
        v-for="(breadcrumb, index) in getBreadcrumbs()"
        :key="index"
        class="breadcrumbs-link"
      >
        <NuxtLink :to="breadcrumb.path" :aria-current="ariaCurrent(index)">
          {{ breadcrumb.meta.title || 'Не заполнен definePageMeta' }}
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
