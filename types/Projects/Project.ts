import type GalleryItem from '~/types/GalleryItem'

export default interface Project {
  id?: number
  type?: string
  title?: string
  imageCard?: string
  description?: string
  imageMain?: string
  subtitle?: string
  taskLeft?: string
  taskRight?: string
  solutionSubtitle?: string
  solutionLeft?: Array<string>
  solutionRight?: Array<string>
  resultGallery?: GalleryItem[]
}
