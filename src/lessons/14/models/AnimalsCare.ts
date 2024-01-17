import { Department } from '@/lessons/14/models/Department.ts'
import { zooAnimals } from '@/lessons/14/mocks/animals.ts'

import { IAnimal } from '@/lessons/14/interfaces/IAnimal.ts'

export class AnimalsCare extends Department {
  private _animals: IAnimal[] = []

  async hireEmployees() {
    this.hireEmployee('Zookeeper')
    this.hireEmployee('Veterinarian')
    this.hireEmployee('Animal Trainer')
    this.hireEmployee('Wildlife Biologist')
    this.hireEmployee('Animal Caretaker')

    return this.employees
  }

  bringAnimal(animalKind: string) {
    const newAnimal = zooAnimals.find(animal => animal.species === animalKind)
    if (newAnimal) {
      this._animals.push(newAnimal)
    } else {
      console.error(`We can\`t assign ${animalKind} to our zoo`)
    }

    return newAnimal
  }

  releaseAnimal(animalKind: string) {
    const animal = zooAnimals.find(animal => animal.species === animalKind)
    if (animal) {
      this._animals = this._animals.filter(
        animal => animal.species === animalKind,
      )
    } else {
      console.error(`We don\`t have ${animalKind} in our zoo`)
    }

    return animal
  }
}
