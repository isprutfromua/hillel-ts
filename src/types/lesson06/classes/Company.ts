import { Organization } from '../interfaces/Organization'
import { Accounting } from './Accounting'
import { Department } from './Department'
import { Domain } from '../models/Domain'

export class Company implements Organization {
  #departments: Set<Department> = new Set()
  #accounting = new Accounting('main accounting', 'accounting')

  constructor(public readonly name: string) {}

  get trainees(): string[] {
    return Array.from(this.#departments).flatMap(
      ({ employees }) => employees.trainees,
    )
  }

  get employees(): string[] {
    return Array.from(this.#departments).flatMap(({ employees }) =>
      employees.trainees.concat(...employees.contractors),
    )
  }

  get departments(): string[] {
    return Array.from(this.#departments).map(departments => departments.name)
  }

  openDepartment(name: string, domain: Domain): Department {
    const department = new Department(name, domain)

    department.setOnHireCallback(employee => {
      this.#accounting.addToBalance(employee)
    })

    department.setOnReleaseCallback(employee => {
      this.#accounting.removeFromBalance(employee)
    })

    this.#departments.add(department)
    this.#accounting.addToBalance(department)
    console.log(`Company: ${name} Department successfully opened`)

    return department
  }

  closeDepartment(name: string): void {
    const target = Array.from(this.#departments).find(el => el.name == name)

    if (target) {
      target.releaseEmployees()
      this.#accounting.removeFromBalance(target)
      console.log('Company: Department successfully closed')
    } else {
      console.log(
        'Company: Organization doesn`t have department with name: ' + name,
      )
    }
  }

  paySalaries(): void {
    this.#accounting.paySalaries()
  }
}
