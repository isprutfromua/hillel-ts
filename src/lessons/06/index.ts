import { Trainee } from '@/types/lesson06/classes/Trainee'
import { Contractor } from '@/types/lesson06/classes/Contractor'
import { faker } from '@faker-js/faker'

const cont1 = new Contractor(
  faker.person.firstName(),
  faker.person.lastName(),
  faker.finance.accountNumber({ length: 20 }),
)
const tr1 = new Trainee(
  faker.person.firstName(),
  faker.person.lastName(),
  faker.finance.accountNumber({ length: 20 }),
)

console.log(cont1.bankAccount)
console.log(tr1.salary)
