import { Employee } from './OrganizationalUnit.ts'

export interface EmployeeObserver {
  onHire(employee: Employee): void
  onRelease(employee: Employee): void
}
