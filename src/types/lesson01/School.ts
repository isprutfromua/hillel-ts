import { IDirection } from '@type/lesson01'

export interface ISchool {
  directions: IDirection[]

  addDirection(direction: IDirection): void
}
