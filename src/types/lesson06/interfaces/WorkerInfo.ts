import { WorkerDepartmentInfo } from './WorkerDepartmentInfo'

export interface WorkerInfo {
  salary: number
  department: WorkerDepartmentInfo | null

  assignDepartment(departmentData: WorkerDepartmentInfo): void
  unAssignDepartment(): void
}
