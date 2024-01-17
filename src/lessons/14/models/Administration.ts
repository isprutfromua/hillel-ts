import { Department } from '@/lessons/14/models/Department.ts'
import { AnimalsCare } from '@/lessons/14/models/AnimalsCare.ts'
import { IDepartment } from '@/lessons/14/interfaces/IDepartment.ts'

export class Administration extends Department {
  async hireEmployees() {
    this.hireEmployee('Manager')
    this.hireEmployee('Assistant Manager')
    this.hireEmployee('HR Specialist')
    this.hireEmployee('Executive Assistant')
    this.hireEmployee('Office Clerk')

    return this.employees
  }

  releaseEmployeeFromDepartment(position: string, department: IDepartment) {
    department.releaseEmployee(position)
  }

  hireEmployeeForDepartment(position: string, department: IDepartment) {
    department.releaseEmployee(position)
  }

  requestAnimal(animalsDepartment: AnimalsCare, animalKind: string) {
    return animalsDepartment.bringAnimal(animalKind)
  }

  releaseAnimal(animalsDepartment: AnimalsCare, animalKind: string) {
    return animalsDepartment.releaseAnimal(animalKind)
  }
}
