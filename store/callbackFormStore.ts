// @ts-ignore
import { defineStore } from 'pinia'
import type { CallbackForm } from '~/types/callbackForm'
import * as yup from 'yup'

export const useCallbackFormStore = defineStore('callbackFormStore', () => {
  const { $api } = useNuxtApp()
  const formData = new FormData()
  const { execute, status } = useAsyncData(
    () =>
      $api('/api/forms', {
        method: 'POST',
        body: formData
      }),
    {
      immediate: false
    }
  )

  const postForm = async (args: CallbackForm) => {
    const formatted = document.title
    for (const key in args) {
      if (key === 'connection') {
        const connection = toRaw(args[key])
        const connectionString = Object.entries(connection)
          .filter((item) => item[1])
          .map((item) => item[0])
          .join(' или ')

        formData.append(key, connectionString)
      }
      // @ts-ignore
      else formData.append(key, args[key])
    }
    formData.append('formatted', formatted)
    await execute()

    return status.value
  }

  const yupRulePhone = () =>
    yup
      .string()
      .min(18, 'Поле заполненно не верно')
      .required('Поле обязательно')

  const yupRuleName = () =>
    yup.string().min(1, 'Минимум 1 символ').required('Поле обязательно')

  const yupRuleEmail = () => yup.string().email('Поле заполненно не верно')

  return {
    postForm,
    yupRuleName,
    yupRulePhone,
    yupRuleEmail
  }
})
