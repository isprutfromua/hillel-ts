import { ContractorInfo } from '../interfaces'
import { EmployeeStatus } from '../models'
import { Worker } from '../abstractions'

export class Contractor extends Worker implements ContractorInfo {
  public status = EmployeeStatus.ACTIVE
}
