// @ts-ignore
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading: Ref<Boolean> = ref(false)
  const isOpenMenu: Ref<Boolean> = ref(false)

  const toggleMenu = (): void => {
    isOpenMenu.value = !isOpenMenu.value
  }
  const setIsLoading = (bool: Boolean): void => {
    isLoading.value = bool
  }

  return {
    isLoading,
    isOpenMenu,
    toggleMenu,
    setIsLoading,
  }
})
