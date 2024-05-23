// @ts-ignore
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading: Ref<Boolean> = ref(false)
  const setIsLoading = (bool: Boolean): void => {
    isLoading.value = bool
  }

  return {
    isLoading,
    setIsLoading
  }
})
