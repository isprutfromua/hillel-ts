import { IPerson } from '@/lessons/14/interfaces/IPerson.ts'

export type IZooEmployeeType = IZooEmployee['position']
export interface IEmployee {
  contactInfo: IPerson
  position: string
  responsibilities: string
  salary: number
}
export interface AnimalCurator extends IEmployee {
  position: 'Animal Curator'
}
export interface Veterinarian extends IEmployee {
  position: 'Veterinarian'
}
export interface Educator extends IEmployee {
  position: 'Educator'
}
export interface Administrator extends IEmployee {
  position: 'Administrator'
}
export interface MaintenanceWorker extends IEmployee {
  position: 'Maintenance Worker'
}
export interface Scientist extends IEmployee {
  position: 'Scientist'
}
export interface EnvironmentalSpecialist extends IEmployee {
  position: 'Environmental Specialist'
}
export interface Marketer extends IEmployee {
  position: 'Marketer'
}
export type IZooEmployee =
  | AnimalCurator
  | Veterinarian
  | Educator
  | Administrator
  | MaintenanceWorker
  | Scientist
  | EnvironmentalSpecialist
  | Marketer
