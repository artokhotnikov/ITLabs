import type { UseFetchOptions } from '#app'

export const useMyFetch = (url: string, options?: UseFetchOptions<unknown>) => {
  const config = useRuntimeConfig()
  return useFetch(url, { baseURL: config.public.API, ...options })
}
