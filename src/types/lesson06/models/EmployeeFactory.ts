import { getRandomID } from '@/helpers/functions'
import { Employee } from '@type/lesson06/interfaces/OrganizationalUnit.ts'
import { Contractor, Trainee } from '@type/lesson06/classes'

export class EmployeeFactory {
  static createTrainee(
    name: string,
    surname: string,
    bankAccount: string,
  ): Trainee {
    const trainee = new Trainee(name, surname, bankAccount)
    trainee.salary = 1000
    return trainee
  }

  static createContractor(
    name: string,
    surname: string,
    bankAccount: string,
  ): Contractor {
    const contractor = new Contractor(name, surname, bankAccount)
    contractor.salary = contractor.salary + 500
    return contractor
  }

  static generateEmployeeId(employees: Map<number, Employee>): number {
    let newEmployeeId = getRandomID()

    // regenerate if exists
    while (employees.has(newEmployeeId)) {
      newEmployeeId = getRandomID()
    }

    return newEmployeeId
  }
}
