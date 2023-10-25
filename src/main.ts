import type {
  ISchool,
  IDirection,
  ILevel,
  IGroup,
  IStudent,
  Subject,
} from './types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class School implements ISchool {
  directions: ISchool['directions'] = []

  addDirection(direction: IDirection): void {
    this.directions.push(direction)
  }
}

export class Direction implements IDirection {
  levels: IDirection['levels'] = []
  private _name: string

  constructor(name: IDirection['name']) {
    this._name = name
  }

  get name(): string {
    return this._name
  }

  addLevel(level: ILevel): void {
    this.levels.push(level)
  }
}

export class Level implements ILevel {
  groups: ILevel['groups'] = []
  private _name: ILevel['name']
  private _program: ILevel['program']

  constructor(name: ILevel['name'], program: ILevel['program']) {
    this._name = name
    this._program = program
  }

  get name(): string {
    return this._name
  }

  get program(): string {
    return this._program
  }

  addGroup(group: IGroup): void {
    this.groups.push(group)
  }
}

export class Group implements IGroup {
  private _students: IStudent[] = []

  constructor(
    public directionName: IGroup['directionName'],
    public levelName: IGroup['levelName'],
  ) {}

  get students(): IStudent[] {
    return this._students
  }

  addStudent(student: IStudent): void {
    this._students.push(student)
  }

  showPerformance(): IStudent[] {
    const sortedStudents = this.students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating(),
    )

    return sortedStudents
  }
}

export class Student implements IStudent {
  grades: IStudent['grades'] = {}
  attendance: IStudent['attendance'] = []

  constructor(
    public firstName: IStudent['firstName'],
    public lastName: IStudent['lastName'],
    public birthYear: IStudent['birthYear'],
  ) {}

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`
  }

  set fullName(value) {
    ;[this.lastName, this.firstName] = value.split(' ')
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear
  }

  setGrade(subject: Subject, grade: number): void {
    this.grades[subject] = grade
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present)
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this.grades)

    if (gradeValues.length === 0) return 0

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length

    const attendancePercentage =
      (this.attendance.filter(present => present).length /
        this.attendance.length) *
      100

    return (averageGrade + attendancePercentage) / 2
  }
}
