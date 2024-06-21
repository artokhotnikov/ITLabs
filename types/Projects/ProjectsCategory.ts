import type Project from '~/types/Projects/Project'
import type GalleryItem from '~/types/GalleryItem'

export default interface ProjectsCategory {
  id?: number
  image?: string
  images?: GalleryItem[]
  title?: string
  subtitle?: string
  description?: string
  video?: string
  videoPoster?: string
  firstBlock?: string
  secondBlock?: string
  slug?: string
  projects?: Project[]
}
