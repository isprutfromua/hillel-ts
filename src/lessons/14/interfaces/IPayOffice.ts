import {
  ITicket,
  Ticket,
  TTicketType,
} from '@/lessons/14/interfaces/ITicket.ts'
import { Database, IDatabase } from '@/lessons/14/helpers/IDatabase.ts'
import { IZooClient, IZooVisitor } from '@/lessons/14/interfaces/IZooGuests.ts'
import { IObserver } from '@/lessons/14/helpers/IObserver.ts'
import {
  IDepartment,
  IVisitor,
  TICKETS_COUNT,
  WORKING_HOURS,
} from '@/lessons/14/interfaces/IAdministration.ts'

export type TPayOfficeActions =
  | 'pause'
  | 'close'
  | 'sold family'
  | 'sold child'
  | 'sold adult'
export type TPayOfficeObserver = IObserver<TPayOfficeActions>
export interface IPayOffice {
  sellTicket(type: TTicketType): ITicket | null

  addPersonToQueue(observer: TPayOfficeObserver): void

  addClient(client: IZooClient, clientsDatabase: IDatabase<IZooClient>): void

  addVisitor(visitor: IZooVisitor): void

  notifyVisitors(message: TPayOfficeActions): void
}
export class PayOffice implements IPayOffice, IDepartment {
  private static instance: PayOffice | null = null
  private _queue: TPayOfficeObserver[] = []
  private _visitors: IDatabase<IZooVisitor> = new Database()
  private _tickets: Record<TTicketType, number> = TICKETS_COUNT

  private constructor() {} // Приватний конструктор для Singleton

  static getInstance(): PayOffice {
    if (!PayOffice.instance) {
      PayOffice.instance = new PayOffice()
    }
    return PayOffice.instance
  }

  sellTicket(type: TTicketType): ITicket | null {
    this._tickets[type]--

    return new Ticket(type, WORKING_HOURS)
  }

  addClient(client: IZooClient, clientsDatabase: IDatabase<IZooClient>): void {
    // if (!clientsDatabase.hasEntity(client)) {
    //   const discount = client.type === 'adult' ? 0.1 : 0
    //   const newClient: IZooClient = {
    //     personalDiscount: discount,
    //   }
    //   clientsDatabase.addEntity(newClient)
    //   console.log('New client added to the database.')
    // } else {
    //   console.log('This person is already a client.')
    // }
  }

  addVisitor(visitor: IZooVisitor): void {
    this._visitors.addEntity(visitor)
  }

  acceptVisitor(visitor: IVisitor) {
    visitor.visitPayOffice(this)
  }

  addPersonToQueue(observer: TPayOfficeObserver): void {
    this._queue.push(observer)
  }

  notifyVisitors(message: TPayOfficeActions): void {
    this._queue.forEach(visitor => visitor.update(message))
  }
}
