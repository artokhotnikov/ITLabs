// @ts-ignore
import { defineStore } from 'pinia'
import type ProjectsCategory from '~/types/Projects/ProjectsCategory'
import { useMyFetch } from '~/utils/useMyFetch'
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
    const { data } = await useMyFetch('/api/project_categories')
    projectCategories.value = data.value as ProjectsCategory[]
  }
  const getProjects = async () => {
    const { data } = await useMyFetch('/api/projects')
    projects.value = data.value as Project[]
  }

  return {
    URL,
    projectCategories,
    projects,
    getProjectCategories,
    getProjects,
    init
  }
})
