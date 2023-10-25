import { IStudent } from '@type/lesson01'

export interface IGroup {
  directionName: string
  levelName: string
  readonly students: IStudent[]

  addStudent(student: IStudent): void
  showPerformance(): IStudent[]
}
