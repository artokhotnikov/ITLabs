import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading = ref(false)
  const isOpenMenu = ref(false)

  const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
  }
  const setIsLoading = (bool) => {
    isLoading.value = bool
  }

  return {
    isLoading,
    isOpenMenu,
    toggleMenu,
    setIsLoading,
  }
})
