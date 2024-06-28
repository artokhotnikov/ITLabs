// @ts-ignore
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading: Ref<Boolean> = ref(false)
  const isOpenMenu: Ref<Boolean> = ref(false)
  const setIsLoading = (bool: Boolean): void => {
    isLoading.value = bool
  }
  const toggleMenu = (): void => {
    isOpenMenu.value = !isOpenMenu.value
  }

  return {
    isLoading,
    isOpenMenu,
    toggleMenu,
    setIsLoading
  }
})
