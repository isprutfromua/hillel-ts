import { Employee } from './OrganizationalUnit'
import { Department } from '../classes'

export interface AccountingDepartment {
  balance: number

  addToBalance(subject: Department | Employee): void
  removeFromBalance(subject: Department | Employee): void
  paySalaries(): void
}
