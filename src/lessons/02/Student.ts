import { FullName, Grade, Lesson, Mark, Visit } from '@type/lesson02'

interface IStudent {
  fullName: FullName
  readonly age: number

  setGrade(workName: string, mark: Mark): void
  setVisit(lesson: Lesson, present: boolean): void
  getPerformanceRating(): number
}

export class Student implements IStudent {
  private _grades: Grade = {} // workName: mark
  private _visits: Visit = {} as Visit // lesson: present

  constructor(
    private _firstName: string,
    private _lastName: string,
    private readonly _birthYear: number,
  ) {}

  get fullName(): FullName {
    return `${this._lastName} ${this._firstName}`
  }

  set fullName(value: FullName) {
    const [newFirstName, newLastName] = value.split(' ')
    this._firstName = newFirstName
    this._lastName = newLastName
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear
  }

  setGrade(workName: string, mark: Mark): void {
    this._grades[workName] = mark
  }

  setVisit(lesson: Lesson, present: boolean): void {
    this._visits[lesson] = present
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades)
    const visitsValues = Object.values(this._visits)

    if (!gradeValues.length) return 0

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length
    const attendancePercentage =
      (visitsValues.filter(present => present).length / visitsValues.length) *
      100

    return (averageGrade + attendancePercentage) / 2
  }
}
