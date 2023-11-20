import { Contractor } from '../classes/Contractor'
import { Trainee } from '../classes/Trainee'
import { Budget } from '../models/Budget'
import { FinanceInfo } from './FinanceInfo'
import { PersonalInfo } from './PersonalInfo'

export type Employee = Contractor | Trainee
export type EmployeeData = PersonalInfo & FinanceInfo
export interface Employees {
  contractors: string[]
  trainees: string[]
}
export interface OrganizationalUnit {
  readonly name: string
  readonly domain: string
  readonly employees: Employees
  readonly budget: Budget
  readonly balance: number

  hireEmployee(data: EmployeeData): void
  changeEmployeeType(name: string, surname: string): void
  releaseEmployee(name: string, surname: string): void
  releaseEmployees(): void
}
