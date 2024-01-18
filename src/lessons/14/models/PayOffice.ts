import { Department } from '@/lessons/14/models/Department.ts'
import { IZooVisitor } from '@/lessons/14/interfaces/IZooVisitor.ts'
import { TPayOfficeAction, TVisitorType } from '@/lessons/14/types'

export class PayOffice extends Department {
  _tickets: Record<TVisitorType, number> = {
    family: 100,
    adult: 100,
    child: 100,
  }
  _ticketsPrice: Record<TVisitorType, number> = {
    family: 30,
    adult: 10,
    child: 2,
  }
  _sells: Record<TVisitorType, number> = {
    family: 0,
    adult: 0,
    child: 0,
  }
  _visitorsQueue: IZooVisitor[] = []

  async hireEmployees() {
    this.hireEmployee('Payment Processor')
    this.hireEmployee('Payroll Specialist')
    this.hireEmployee('Billing Coordinator')
    this.hireEmployee('Financial Clerk')
    this.hireEmployee('Tax Analyst')

    return this.employees
  }

  selTicket(type: TVisitorType, count: number) {
    if (count > this._tickets[type]) {
      throw 'we don`t have enough tickets'
    } else {
      this._tickets[type] -= count
      this._sells[type] += count
    }
  }

  calculateProfit() {
    let sells = 0

    for (const [type, count] of Object.entries(this._sells)) {
      sells += this._ticketsPrice[type as TVisitorType] * count
    }

    return sells
  }

  addVisitorToQueue(visitor: IZooVisitor) {
    this._visitorsQueue.push(visitor)
  }

  notifyVisitors(action: TPayOfficeAction) {
    this._visitorsQueue.forEach(visitor => visitor.update(action))
  }

  get visitorsQueue() {
    return this._visitorsQueue
  }

  get tickets() {
    return this._tickets
  }

  get sells() {
    return this._sells
  }
}
