export default defineNuxtRouteMiddleware(() => {
  // анлок скролла и скрытие меню при переходах между страниц
  const body = document?.querySelector('body')
  if (body?.classList.contains('lock')) body.classList.remove('lock')
})
