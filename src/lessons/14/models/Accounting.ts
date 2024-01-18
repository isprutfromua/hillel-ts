import { Department } from '@/lessons/14/models/Department.ts'
import { IEmployee } from '@/lessons/14/interfaces/IEmployee.ts'
import { IAnimal } from '@/lessons/14/interfaces/IAnimal.ts'

export class Accounting extends Department {
  private _budget: number
  private _accountingList = {
    employees: [] as IEmployee[],
    animals: [] as IAnimal[],
  }

  constructor(name: string, budget: number) {
    super(name)
    this._budget = budget
  }

  async hireEmployees() {
    this.hireEmployee('Accountant')
    this.hireEmployee('Senior Accountant')
    this.hireEmployee('Financial Analyst')
    this.hireEmployee('Bookkeeper')
    this.hireEmployee('Auditor')

    return this.employees
  }

  assignEmployees(employees: IEmployee[]) {
    this._accountingList.employees.push(...employees)
  }

  assignAnimal(animal: IAnimal) {
    this._accountingList.animals.push(animal)
  }

  paySalary(): void {
    this._accountingList.employees.forEach(({ salary }) => {
      if (this._budget > salary) {
        this._budget -= salary
      } else {
        throw 'We don`t have enough money for paying salaries.'
      }
    })
  }

  buyAnimalsFood() {
    this._accountingList.animals.forEach(({ foodCost }) => {
      if (this._budget > foodCost) {
        this._budget -= foodCost
      } else {
        throw 'We don`t have enough money for buying food for animals.'
      }
    })
  }

  getAnimalsFoodCost(): number {
    return this._accountingList.animals.reduce(
      (total, animal) => total + animal.foodCost,
      0,
    )
  }

  async calculateExpenses() {
    return this.getTotalSalary() + this.getAnimalsFoodCost()
  }
}
