import type { UseFetchOptions } from '#app'
import { useContentStore } from '~/store/contentStore'

export const useMyFetch = (url: string, options?: UseFetchOptions<unknown>) => {
  const contentStore = useContentStore()
  return useFetch(url, { baseURL: contentStore.URL, ...options })
}
