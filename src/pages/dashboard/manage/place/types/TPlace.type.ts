import { TRole } from '@/types'

export type TPlace = {
  id: number
  name: string
  category: string
  description: string
  floor: string
  building: string
  campus: string
  capacity: number | null
  equipments: string[]
  accessibility: boolean
  open24h: boolean
  area: boolean
  position: any
  role: TRole[]
  createdAt: string
  updatedAt: string
  url: string
}
