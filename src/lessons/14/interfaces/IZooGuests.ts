import { ITicket } from '@/lessons/14/interfaces/ITicket.ts'
import { IPayOffice } from '@/lessons/14/interfaces/IPayOffice.ts'
import { IPerson } from '@/lessons/14/interfaces/IPerson.ts'

export interface IZooVisitor extends IPerson {
  ticket: ITicket | null

  buyPopcorn(): void

  buyTicket(payOffice: IPayOffice): void

  goHome(): void

  reportProblem(): void

  watchAnimals(): void
}
export interface IZooClient extends IZooVisitor {
  personalDiscount: number | null
}
