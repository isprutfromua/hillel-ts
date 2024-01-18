import { getRandomID } from '@/helpers/functions'
import { Contractor, Trainee } from '.'
import { isContractor } from '../helpers'
import {
  AccountingSubject,
  OrganizationalUnit,
  WorkerDepartmentInfo,
} from '../interfaces'
import { Employee, EmployeeData } from '../interfaces/OrganizationalUnit'
import { Budget, Domain, EmployeeStatus } from '../models'

export class Department implements OrganizationalUnit, AccountingSubject {
  public accountingID?: number
  public budget: Budget = {} as Budget

  #employees: Map<number, Employee> = new Map()
  #onHireCallback: (employee: Employee) => void = () => {}
  #onReleaseCallback: (employee: Employee) => void = () => {}

  constructor(
    public name: string,
    public domain: Domain,
  ) {}

  get employees() {
    return Array.from(this.#employees).reduce(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (acc, [_, employee]) => {
        const employeeFullName = `${employee.name} ${employee.surname}`
        if (isContractor(employee)) {
          acc.contractors.push(employeeFullName)
        } else {
          acc.trainees.push(employeeFullName)
        }

        return acc
      },
      { contractors: [] as string[], trainees: [] as string[] },
    )
  }

  get balance(): number {
    return this.#calculateBalance()
  }

  #calculateBalance(): number {
    const debit = this.budget.debit.reduce((acc, value) => acc + value, 0)
    const credit = this.budget.credit.reduce((acc, value) => acc + value, 0)

    return debit - credit
  }

  setOnHireCallback(callback: (employee: Employee) => void): void {
    this.#onHireCallback = callback
  }

  setOnReleaseCallback(callback: (employee: Employee) => void): void {
    this.#onReleaseCallback = callback
  }

  hireEmployee(traineeInfo: EmployeeData): void {
    const employeeDepartmentInfo = this.#prepareEmployeeData()
    const { name, surname, bankAccount } = traineeInfo
    const newTrainee = new Trainee(name, surname, bankAccount)

    this.#employees.set(employeeDepartmentInfo.id, newTrainee)
    newTrainee.salary = 1000
    newTrainee.assignDepartment(employeeDepartmentInfo)
    this.#onHireCallback(newTrainee)
    console.log(
      `${this.name} Department: ${name} ${surname} hired. Please welcome!`,
    )
  }

  #prepareEmployeeData(): WorkerDepartmentInfo {
    let newEmployeeId = getRandomID()

    // regenerate if exist
    while (this.#employees.has(newEmployeeId)) {
      newEmployeeId = getRandomID()
    }

    return {
      id: newEmployeeId,
      name: this.name,
    }
  }

  #findEmployee(name: string, surname: string): Employee | undefined {
    let result = undefined

    Array.from(this.#employees).forEach(([, employee]) => {
      if (employee.name == name && employee.surname == surname) {
        result = employee
      }
    })

    return result
  }

  changeEmployeeType(name: string, surname: string): void {
    const employee = this.#findEmployee(name, surname)

    if (!employee) {
      console.log(
        `${this.name} Department: We have no employee with name ${name} and surname ${surname}`,
      )
      return
    }

    if (isContractor(employee)) {
      console.log(
        `${this.name} Department: Employee is contractor. No needs to change`,
      )
      return
    }

    if (employee.trialDays >= 0) {
      console.log(
        `${this.name} Department: Trial is not ended yet. Please try later`,
      )
      return
    }

    if (!employee.department) {
      console.log(
        `${this.name} Department: Employee is not assigned to any departments!`,
      )
      return
    }

    const { bankAccount } = employee
    const newContractor = new Contractor(name, surname, bankAccount)
    newContractor.salary = newContractor.salary + 500
    this.#employees.set(employee.department.id, newContractor)
    console.log(
      `${this.name} Department: Employee type was successfully changed!`,
    )
  }

  releaseEmployee(name: string, surname: string): void {
    const employee = this.#findEmployee(name, surname)

    if (!employee) {
      console.log(
        `${this.name} Department: We have no employee with name ${name} and surname ${surname}`,
      )
      return
    }

    if (!employee.department) {
      console.log(
        `${this.name} Department: Employee has no current assignments`,
      )
      return
    }

    if (
      isContractor(employee) &&
      employee.status === EmployeeStatus.UNPAID_LEAVE
    ) {
      console.log(
        `${this.name} Department: Employee is on vacation. Please try later`,
      )
      return
    }

    const { id: employeeID } = employee.department

    if (!this.#employees.has(employeeID)) {
      console.log(
        `${this.name} Department: Employee is not assigned to current department`,
      )
      return
    }

    this.#employees.delete(employeeID)
    employee.unAssignDepartment()
    console.log(
      `${this.name} Department: Employee ${employee.name} ${employee.surname} has been released`,
    )
    this.#onReleaseCallback(employee)
  }

  releaseEmployees(): void {
    if (!this.#employees.size) {
      console.log(
        `Department: ${this.name} has no workers. We can't release anyone`,
      )
      return
    }

    this.#employees.forEach(employee => {
      this.releaseEmployee(employee.name, employee.surname)
    })
  }
}
