import { ILevel } from '@type/lesson01'

export interface IDirection {
  levels: ILevel[]
  readonly name: string

  addLevel(level: ILevel): void
}
