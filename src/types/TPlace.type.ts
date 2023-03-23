import { TMapCategories } from './TMapCategories.type'

export type TPlace = {
  id: string
  name: string
  description: string
  category: TMapCategories
  position: [number, number]
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
  operation: {
    start: string
    end: string
  }
  responsible?: {
    name?: string
    email?: string
    phone: string
  }
  createdAt: string
  updatedAt: string
}
