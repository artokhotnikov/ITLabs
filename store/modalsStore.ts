import { ref } from 'vue'

interface ModalsType {
  specialist: boolean
  resultSuccess: boolean
  resultError: boolean
  discussionDiscussion: boolean
  discussionQuestion: boolean
}

export const useModalsStore = defineStore('modalsStore', () => {
  const showModal = ref<ModalsType>({
    specialist: false,
    resultSuccess: false,
    resultError: false,
    discussionDiscussion: false,
    discussionQuestion: false
  })

  const toggle = (type: keyof ModalsType) => {
    showModal.value[type] = !showModal.value[type]
  }
  const close = (type: keyof ModalsType) => {
    showModal.value[type] = false
  }
  const open = (type: keyof ModalsType) => {
    showModal.value[type] = true
  }
  return {
    showModal,
    toggle,
    close,
    open
  }
})
