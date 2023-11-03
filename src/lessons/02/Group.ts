import { ClassBuilder, SortableArray } from '@/helpers'
import { Status } from '@type/lesson02'
import { Area, Student } from '@/lessons/02'

type StaticFields = {
  status: Status
  area: Area
  setStatus: (status: Status) => void
  showPerformance: () => Student[]
}
type EditableFieldsList = {
  student: Student
}
type IGroup = ClassBuilder<EditableFieldsList> & Readonly<StaticFields>

export class Group implements IGroup {
  private _students: SortableArray<Student> = new SortableArray<Student>()

  constructor(
    public directionName: string,
    public levelName: string,
    private _status: Status,
    private readonly _area: Area,
  ) {}

  get area(): Area {
    return this._area
  }

  get status(): Status {
    return this._status
  }

  get students(): SortableArray<Student> {
    return this._students
  }

  addStudent(student: Student): void {
    this._students.push(student)
  }

  removeStudent(student: Student): void {
    this._students = this._students.filter(
      s => s !== student,
    ) as SortableArray<Student>
  }

  setStatus(status: Status): void {
    this._status = status
  }

  showPerformance(): Student[] {
    return this._students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating(),
    )
  }
}
