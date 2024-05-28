import type Project from '~/types/Projects/Project'

export default interface ProjectsCategory {
  id?: number
  image?: string
  title?: string
  subtitle?: string
  description?: string
  video?: string
  videoPoster?: string
  firstBlock?: string
  secondBlock?: string
  projects?: Project[]
}
