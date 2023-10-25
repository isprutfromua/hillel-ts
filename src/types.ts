export interface ISchool {
  directions: IDirection[]

  addDirection(direction: IDirection): void
}

export interface IDirection {
  levels: ILevel[]
  readonly name: string

  addLevel(level: ILevel): void
}

export interface ILevel {
  groups: IGroup[]
  readonly name: string
  readonly program: string

  addGroup(group: IGroup): void
}

export interface IGroup {
  directionName: string
  levelName: string
  readonly students: IStudent[]

  addStudent(student: IStudent): void
  showPerformance(): IStudent[]
}

export type Subject = string
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
