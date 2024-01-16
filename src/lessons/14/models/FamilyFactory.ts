import { IFamilyFactory, TFamily } from '@/lessons/14/interfaces/TFamily.ts'
import { TPersonType } from '@/lessons/14/interfaces/IPerson.ts'
import { Person } from '@/lessons/14/models/Person.ts'
import { getRandomName } from '@/lessons/14/helpers/getRandomName.ts'

export class FamilyFactory implements IFamilyFactory {
  makeFamily(count: number): TFamily {
    const family: TFamily = []

    for (let i = 0; i < count; i++) {
      const randomName = getRandomName()
      const randomAge = Math.floor(Math.random() * 80) + 1
      const type: TPersonType = randomAge < 18 ? 'child' : 'adult'
      const randomPhone = randomAge < 12 ? null : getRandomPhoneNumber()
      const person = new Person(randomName, randomAge, randomPhone, type)
      family.push(person)
    }

    return family
  }
}
