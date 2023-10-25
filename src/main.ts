class School {
  directions: Direction[] = []

  addDirection(direction: Direction): void {
    this.directions.push(direction)
  }
}

class Direction {
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

class Level {
  private groups: Group[] = []
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

class Group {
  private _students: Student[] = []

  constructor(
    public directionName: string,
    public levelName: string,
  ) {}

  get students(): Student[] {
    return this._students
  }

  public addStudent(student: Student): void {
    this._students.push(student)
  }

  public showPerformance(): Student[] {
    const sortedStudents = this.students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating(),
    )

    return sortedStudents
  }
}

type Subject = string
class Student {
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

  public setGrade(subject: Subject, grade: number): void {
    this.grades[subject] = grade
  }

  public markAttendance(present: boolean): void {
    this.attendance.push(present)
  }

  public getPerformanceRating(): number {
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
