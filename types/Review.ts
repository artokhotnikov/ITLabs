import type GalleryItem from '~/types/GalleryItem'

export interface Review {
  id: number
  image: GalleryItem
  title: string
  subtitle: string
}
