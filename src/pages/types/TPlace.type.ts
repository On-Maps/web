import { TMapCategories } from "./TMapCategories.type";

export type TPlace = {
  id: string;
  name: string;
  description: string;
  category: TMapCategories;
  latitude: number;
  longitude: number;
  image: {
    url: string;
    name: string;
  }[];
  floor: number;
  building: string;
  campus: string;
  accessibility: boolean;
  capacity: number;
  type: string;
  equipments: string[];
  schedules: {
    day: string;
    start: string;
    end: string;
  }[];
  responsible?: {
    name: string;
    email?: string;
    phone?: string;
  };
  createdAt: string;
  updatedAt: string;
};
