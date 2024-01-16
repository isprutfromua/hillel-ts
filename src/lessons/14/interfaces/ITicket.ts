import { TPersonType } from '@/lessons/14/interfaces/IPerson.ts'
import { TWorkingTime } from '@/lessons/14/helpers/TWorkingTime.ts'

export type TTicketType = TPersonType | 'family'
export interface ITicket {
  validUntil: Date
  type: TTicketType
}
export class Ticket implements ITicket {
  type: TTicketType
  validUntil: Date
  constructor(type: TTicketType, until: TWorkingTime) {
    const endTime = new Date()
    endTime.setHours(...until)

    this.validUntil = endTime
    this.type = type
  }
}
