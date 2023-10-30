import { Area, Lecturer } from '@/lessons/02'
import { ClassBuilder } from '@/helpers'

type EditableFieldsList = {
  area: Area
  lecturer: Lecturer
}
type ISchool = ClassBuilder<EditableFieldsList>

export class School implements ISchool {
  private _areas: Area[] = []
  private _lecturers: Lecturer[] = []

  get areas(): Area[] {
    return this._areas
  }

  get lecturers(): Lecturer[] {
    return this._lecturers
  }

  addArea(area: Area): void {
    this._areas.push(area)
  }

  addLecturer(lecturer: Lecturer): void {
    this._lecturers.push(lecturer)
  }

  removeArea(area: Area): void {
    this._areas = this._areas.filter(a => a !== area)
  }

  removeLecturer(lecturer: Lecturer): void {
    this._lecturers = this._lecturers.filter(l => l !== lecturer)
  }
}
