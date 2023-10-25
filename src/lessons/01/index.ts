import {
  ISchool,
  IDirection,
  ILevel,
  IGroup,
  IStudent,
  Subject,
} from '@type/lesson01'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class School implements ISchool {
  directions: IDirection[] = []

  addDirection(direction: IDirection): void {
    this.directions.push(direction)
  }
}

export class Direction implements IDirection {
  levels: ILevel[] = []
  private _name: string

  constructor(name: string) {
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
  groups: IGroup[] = []
  private _name: string
  private _program: string

  constructor(name: string, program: string) {
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
    public directionName: string,
    public levelName: string,
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
  grades: Record<Subject, number> = {}
  attendance: boolean[] = []

  constructor(
    public firstName: string,
    public lastName: string,
    public birthYear: number,
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
