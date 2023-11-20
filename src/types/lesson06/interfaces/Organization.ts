import { Department } from '../classes'
import { Domain } from '../models'

export interface Organization {
  readonly name: string
  readonly trainees: string[]
  readonly employees: string[]
  readonly departments: string[]

  openDepartment(name: string, domain: Domain): Department
  closeDepartment(name: string): void
  paySalaries(): void
}
