import { Subject } from '@type/lesson01'

export interface IStudent {
  grades: Record<Subject, number>
  attendance: boolean[]
  firstName: string
  lastName: string
  birthYear: number
  fullName: string
  readonly age: number

  setGrade(subject: Subject, grade: number): void
  markAttendance(present: boolean): void
  getPerformanceRating(): number
}
