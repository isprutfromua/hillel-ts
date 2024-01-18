import { Person } from '../abstractions'
import {
  AccountingSubject,
  WorkerDepartmentInfo,
  WorkerInfo,
} from '../interfaces'

export class Worker extends Person implements WorkerInfo, AccountingSubject {
  public salary = 0
  public department: WorkerDepartmentInfo | null = null
  public accountingID?: number

  assignDepartment(departmentData: WorkerDepartmentInfo) {
    this.department = { ...departmentData }
  }

  unAssignDepartment() {
    this.department = null
  }
}
