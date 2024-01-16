export interface IPerson {
  name: string
  age: number
  phone: number | null
  type: TPersonType
}
export type TPersonType = 'child' | 'adult'
