import { Person } from './Person'
import { WorkerInfo } from '../interfaces/WorkerInfo'

export abstract class Worker extends Person implements WorkerInfo {
  public salary = 0
}
