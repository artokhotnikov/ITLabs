import { useGlobalStore } from '~/store/globalStore'

export default defineNuxtRouteMiddleware(() => {
  // анлок скролла и скрытие меню при переходах между страниц
  const globalStore = useGlobalStore()
  const body = document?.querySelector('body')
  if (body?.classList.contains('lock')) body.classList.remove('lock')
  if (globalStore.isOpenMenu) globalStore.toggleMenu()
})
