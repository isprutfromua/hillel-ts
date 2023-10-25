interface ISchool {
  directions: Direction[]

  addDirection(direction: Direction): void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class School implements ISchool {
  directions: Direction[] = []

  addDirection(direction: Direction): void {
    this.directions.push(direction)
  }
}

interface IDirection {
  levels: Level[]
  readonly name: string

  addLevel(level: Level): void
}

class Direction implements IDirection {
  levels: Level[] = []
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  get name(): string {
    return this._name
  }

  addLevel(level: Level): void {
    this.levels.push(level)
  }
}

interface ILevel {
  groups: Group[]
  readonly name: string
  readonly program: string

  addGroup(group: Group): void
}

class Level implements ILevel {
  groups: Group[] = []
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

  addGroup(group: Group): void {
    this.groups.push(group)
  }
}

interface IGroup {
  directionName: string
  levelName: string
  readonly students: Student[]

  addStudent(student: Student): void
  showPerformance(): Student[]
}

class Group implements IGroup {
  private _students: Student[] = []

  constructor(
    public directionName: string,
    public levelName: string,
  ) {}

  get students(): Student[] {
    return this._students
  }

  addStudent(student: Student): void {
    this._students.push(student)
  }

  showPerformance(): Student[] {
    const sortedStudents = this.students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating(),
    )

    return sortedStudents
  }
}

type Subject = string
interface IStudent {
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

class Student implements IStudent {
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
