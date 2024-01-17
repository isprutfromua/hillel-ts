import { faker } from '@faker-js/faker'
import { salaries } from '@/lessons/14/mocks/salaries.ts'
import { IEmployee } from '@/lessons/14/interfaces/IEmployee.ts'
import { IDepartment } from '@/lessons/14/interfaces/IDepartment.ts'

export abstract class Department implements IDepartment {
  name: string
  employees: IEmployee[]

  constructor(name: string) {
    this.name = name
    this.employees = []
  }

  abstract hireEmployees(): Promise<IEmployee[]>

  async calculateExpenses() {
    return this.getTotalSalary()
  }

  hireEmployee(position: string) {
    const newEmployee: IEmployee = {
      name: faker.person.fullName(),
      position,
      salary: this.calculateSalary(position),
    }
    this.employees.push(newEmployee)
  }

  releaseEmployee(position: string) {
    this.employees = this.employees.filter(
      employee => employee.position === position,
    )
  }

  private calculateSalary(position: string): number {
    return salaries[position] || 0
  }

  protected getTotalSalary(): number {
    // Calculate the total salary for the department
    return this.employees.reduce(
      (total, employee) => total + employee.salary,
      0,
    )
  }
}
