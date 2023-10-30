import { Group } from '@/lessons/02'
import { ClassBuilder } from '@/helpers'

type StaticFields = {
  name: string
  description: string
}
type EditableFieldsList = {
  group: Group
}
type ILevel = ClassBuilder<EditableFieldsList> & Readonly<StaticFields>

export class Level implements ILevel {
  private _groups: Group[] = []

  constructor(
    private readonly _name: string,
    private readonly _description: string,
  ) {}

  get description(): string {
    return this._description
  }

  get name(): string {
    return this._name
  }

  get groups(): Group[] {
    return this._groups
  }

  addGroup(group: Group): void {
    this._groups.push(group)
  }

  removeGroup(group: Group): void {
    this._groups = this._groups.filter(g => g !== group)
  }
}
