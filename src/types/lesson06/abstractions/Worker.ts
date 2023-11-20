import { Person } from './Person'
import { WorkerInfo } from '../interfaces/WorkerInfo'
import { WorkerDepartmentInfo } from '../interfaces/WorkerDepartmentInfo'
import { AccountingSubject } from '../interfaces/AccountingSubject'

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
