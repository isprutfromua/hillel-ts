// accounting
import {
  IDepartment,
  IVisitor,
} from '@/lessons/14/interfaces/IAdministration.ts'

export interface IAccountingReport {
  income: number
  outcome: number
}
export interface IAccountingUnit {
  revenue: number

  calculateDailyRevenue(): number

  sendReport(): IAccountingReport
}
export interface IAccounting {
  addDepartment(department: IDepartment): void

  checkBudget(): string

  generateFinancialReport(visitor: IVisitor): void
}
