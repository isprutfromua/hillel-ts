import { TraineeInfo } from '../interfaces/TraineeInfo'
import { Worker } from '../abstractions/Worker'

export class Trainee extends Worker implements TraineeInfo {
  public trialDays = 14
}
