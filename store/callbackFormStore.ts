// @ts-ignore
import { defineStore } from 'pinia'
import { useMyFetch } from '~/utils/useMyFetch'
import type { CallbackForm } from '~/types/callbackForm'
import * as yup from 'yup'

export const useCallbackFormStore = defineStore('callbackFormStore', () => {
  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const postForm = async (args: CallbackForm) => {
    console.log(args)
    return
    const { data } = await useMyFetch('/api/forms')
  }

  const yupRulePhone = () =>
    yup
      .string()
      .matches(phoneRegEx, 'Поле заполненно не верно')
      .required('Поле обязательно')
  const yupRuleName = () =>
    yup.string().min(3, 'Минимум 3 символа').required('Поле обязательно')

  return {
    postForm,
    yupRuleName,
    yupRulePhone
  }
})
