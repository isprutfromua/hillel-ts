import { TraineeInfo } from '../interfaces'
import { Worker } from '../abstractions'

export class Trainee extends Worker implements TraineeInfo {
  public trialDays = 14
}
