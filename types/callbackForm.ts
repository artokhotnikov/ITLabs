export interface CallbackForm {
  title?: string
  name: string
  phone: string
  email?: string
  connection?: {
    telegram: boolean
    whatsapp: boolean
    email: boolean
    phone: boolean
  }
  description?: string
  media?: string
}
