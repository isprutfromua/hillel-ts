import { ContractorInfo } from '../interfaces/ContractorInfo'
import { EmployeeStatus } from '../models/EmployeeStatus'
import { Worker } from '../abstractions/Worker'

export class Contractor extends Worker implements ContractorInfo {
  public status = EmployeeStatus.ACTIVE
}
