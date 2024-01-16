import { IPerson, TPersonType } from '@/lessons/14/interfaces/IPerson.ts'

export class Person implements IPerson {
  constructor(
    public name: string,
    public age: number,
    public phone: number | null,
    public type: TPersonType,
  ) {}
}
