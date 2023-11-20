import { EmployeeData } from '@/types/lesson06/interfaces/OrganizationalUnit'
import { faker } from '@faker-js/faker'

export const getRandomID = () => {
  return parseInt(String(Math.random() * 1000)) + Date.now()
}
export const getPerson = (): EmployeeData => ({
  name: faker.person.firstName(),
  surname: faker.person.lastName(),
  bankAccount: faker.finance.accountNumber(20),
})
