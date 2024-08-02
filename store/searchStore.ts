import type Project from '~/types/Projects/Project'
import type ProjectsCategory from '~/types/Projects/ProjectsCategory'

export interface SearchData {
  project?: Project[]
  projectCategory?: ProjectsCategory[]
}

export const useSearchStore = defineStore('searchStore', () => {
  const config = useRuntimeConfig()
  const URL = config.public.API
  const searchData = ref<SearchData | null>(null)

  const getSearchData = async (string: string) => {
    const data = await $fetch(URL + `/api/search?keyword=${string}`)
    searchData.value = data as SearchData
  }

  return {
    searchData,
    getSearchData
  }
})
