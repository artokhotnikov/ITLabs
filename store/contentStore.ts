// @ts-ignore
import { defineStore } from 'pinia'
import type ProjectsCategory from '~/types/Projects/ProjectsCategory'
import type Project from '~/types/Projects/Project'
import type HomeSlide from '~/types/HomeSlide'

export const useContentStore = defineStore('contentStore', () => {
  const config = useRuntimeConfig()
  const URL = config.public.API
  const { $api } = useNuxtApp()
  const projectCategories = ref<ProjectsCategory[]>([])
  const projects = ref<Project[]>([])
  const homeSlides = ref<HomeSlide[]>([])

  const init = async () => {
    await getProjectCategories()
    await getProjects()
    await getHomeSlides()
  }

  const getProjectCategories = async () => {
    const data = await $api('/api/project_categories')
    projectCategories.value = data as ProjectsCategory[]
  }
  const getProjectCategory = async (id: number) => {
    const data = await $api(`/api/project_categories/${id}`)
    return data as ProjectsCategory
  }
  const getProjectCategoryBySlug = async (slug: string) => {
    const data = await $api(`/project_categories/slug?slug=${slug}`)
    return data as ProjectsCategory
  }
  const getProjects = async () => {
    const data = await $api('/api/projects')
    projects.value = data as Project[]
  }
  const getProject = async (id: number) => {
    const data = await $api(`/api/projects/${id}`)
    return data as Project
  }
  const getProjectBySlug = async (slug: string) => {
    const data = await $api(`/projects/slug?slug=${slug}`)
    return data as Project
  }
  const getHomeSlides = async () => {
    const data: HomeSlide[] = await $api('/api/slider')
    const mappedData: HomeSlide[] = data.map((item) => ({
      ...item,
      media: URL + item.media
    }))
    homeSlides.value = mappedData
    return mappedData
  }

  return {
    URL,
    projectCategories,
    projects,
    homeSlides,
    getProjectCategory,
    getProjectCategories,
    getProjectCategoryBySlug,
    getProjects,
    getProject,
    getProjectBySlug,
    getHomeSlides,
    init
  }
})
