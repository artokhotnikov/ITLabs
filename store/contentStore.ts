// @ts-ignore
import { defineStore } from 'pinia'
import type ProjectsCategory from '~/types/Projects/ProjectsCategory'
import type Project from '~/types/Projects/Project'

export const useContentStore = defineStore('contentStore', () => {
  const URL = 'https://api.itlabs.top'
  const projectCategories = ref<ProjectsCategory[]>([])
  const projects = ref<Project[]>([])

  const init = async () => {
    await getProjectCategories()
    await getProjects()
  }

  const getProjectCategories = async () => {
    const data = await $fetch(URL + '/api/project_categories')
    projectCategories.value = data as ProjectsCategory[]
  }
  const getProjectCategory = async (id: number) => {
    const data = await $fetch(URL + `/api/project_categories/${id}`)
    return data as ProjectsCategory
  }
  const getProjectCategoryBySlug = async (slug: string) => {
    const data = await $fetch(URL + `/project_categories/slug?slug=${slug}`)
    return data as ProjectsCategory
  }
  const getProjects = async () => {
    const data = await $fetch(URL + '/api/projects')
    projects.value = data as Project[]
  }
  const getProject = async (id: number) => {
    const data = await $fetch(URL + `/api/projects/${id}`)
    return data as Project
  }
  const getProjectBySlug = async (slug: string) => {
    const data = await $fetch(URL + `/projects/slug?slug=${slug}`)
    return data as Project
  }

  return {
    URL,
    projectCategories,
    projects,
    getProjectCategory,
    getProjectCategories,
    getProjectCategoryBySlug,
    getProjects,
    getProject,
    getProjectBySlug,
    init
  }
})
