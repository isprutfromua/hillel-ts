import { IGroup } from '@type/lesson01'

export interface ILevel {
  groups: IGroup[]
  readonly name: string
  readonly program: string

  addGroup(group: IGroup): void
}
