import { TMapCategories } from './TMapCategories.type'

export type TPlace = {
  id: string
  name: string
  description: string
  category: TMapCategories
  position: {
    latitude: number
    longitude: number
  }[]
  image: {
    url: string
    name: string
  }[]
  floor: number
  building: string
  campus: string
  accessibility: boolean
  capacity: number
  equipments: string[]
  date?: {
    start: string
    end: string
  }
  open24h?: boolean
  responsible?: {
    name?: string
    email?: string
    phone: string
  }
  createdAt: string
  updatedAt: string
}
