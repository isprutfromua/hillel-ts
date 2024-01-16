import { PayOffice } from '@/lessons/14/interfaces/IPayOffice.ts'
import {
  IAdvertising,
  INews,
} from '@/lessons/14/interfaces/IAdvertisingDepartment.ts'
import { TWorkingTime } from '@/lessons/14/helpers/TWorkingTime.ts'
import { TTicketType } from '@/lessons/14/interfaces/ITicket.ts'

export const WORKING_HOURS: TWorkingTime = [18, 30, 0, 0]
export const TICKETS_COST: Record<TTicketType, number> = {
  family: 100,
  child: 20,
  adult: 80,
}
export const TICKETS_COUNT: Record<TTicketType, number> = {
  family: 100,
  child: 100,
  adult: 100,
}
export interface IVisitor {
  getTotalCost(): number

  // visitAdministration(employee: IEmployee): void

  // visitAnimalsDepartment(animal: IAnimal): void

  visitPayOffice(payOffice: PayOffice): void
}
export interface IDepartment {
  acceptVisitor(visitor: IVisitor): void
}
export interface IAdministration {
  hireEmployee(): void

  makeNewAdvertising(): IAdvertising

  makeNewNews(): INews

  orderAnimal(): void

  releaseAnimal(): void

  releaseEmployee(): void
}
export interface IZooDepartment {
  buyFood(): void

  assignAnimal(): void
}
