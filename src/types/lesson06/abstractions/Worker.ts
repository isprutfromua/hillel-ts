import { Person } from '.'
import {
  WorkerInfo,
  AccountingSubject,
  WorkerDepartmentInfo,
} from '../interfaces'

export abstract class Worker
  extends Person
  implements WorkerInfo, AccountingSubject
{
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
