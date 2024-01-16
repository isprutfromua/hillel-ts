import { IDatabase } from '@/lessons/14/helpers/IDatabase.ts'
import { IZooClient } from '@/lessons/14/interfaces/IZooGuests.ts'

export interface IAdvertisingDepartment {
  clients: IDatabase<IZooClient>
  news: Map<Date, INews>
  advertising: Map<Date, IAdvertising>

  advertise(clients: IZooClient[]): void

  sendPromotions(clients: IZooClient[]): void
}
export interface INews {
  content: string
  title: string
}
export interface IAdvertising {
  discount: number
  title: string
}
