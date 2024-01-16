import { IPerson } from '@/lessons/14/interfaces/IPerson.ts'

export type TFamily = IPerson[]
export interface IFamilyFactory {
  makeFamily(count: number): TFamily
}
