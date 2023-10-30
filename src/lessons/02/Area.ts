import { Level } from '@/lessons/02'
import { ClassBuilder } from '@/helpers'

type StaticFields = {
  name: string
}
type EditableFieldsList = {
  level: Level
}
type IArea = ClassBuilder<EditableFieldsList> & Readonly<StaticFields>

export class Area implements IArea {
  private _levels: Level[] = []

  constructor(private readonly _name: string) {}

  get name(): string {
    return this._name
  }

  get levels(): Level[] {
    return this._levels
  }

  addLevel(level: Level): void {
    this._levels.push(level)
  }

  removeLevel(level: Level): void {
    this._levels = this._levels.filter(l => l !== level)
  }
}
