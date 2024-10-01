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

  const getProjectCategories = async () => {
    const data = await $api<ProjectsCategory[]>('/api/project_categories')
    projectCategories.value = data
    return data
  }
  const getProjectCategory = async (id: number) => {
    const data = await $api<ProjectsCategory>(`/api/project_categories/${id}`)
    return data
  }
  const getProjectCategoryBySlug = async (slug: string) => {
    const data = await $api<ProjectsCategory>(
      `/project_categories/slug?slug=${slug}`
    )
    return data
  }
  const getProjects = async () => {
    const data = await $api<Project[]>('/api/projects')
    projects.value = data
    return data
  }
  const getProject = async (id: number) => {
    const data = await $api<Project>(`/api/projects/${id}`)
    return data
  }
  const getProjectBySlug = async (slug: string) => {
    const data = await $api<Project>(`/projects/slug?slug=${slug}`)
    return data
  }
  const getHomeSlides = async () => {
    const data = await $api<HomeSlide[]>('/api/slider')
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
    getHomeSlides
  }
})
