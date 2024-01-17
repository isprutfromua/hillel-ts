import { IZoo } from '@/lessons/14/interfaces/IZoo.ts'
import { Administration } from '@/lessons/14/models/Administration.ts'
import { AnimalsCare } from '@/lessons/14/models/AnimalsCare.ts'
import { Marketing } from '@/lessons/14/models/Marketing.ts'
import { PayOffice } from '@/lessons/14/models/PayOffice.ts'
import { Accounting } from '@/lessons/14/models/Accounting.ts'

export class Zoo implements IZoo {
  accounting: Accounting
  administration: Administration
  animalsCare: AnimalsCare
  marketing: Marketing
  payOffice: PayOffice

  constructor(zooName: string) {
    // Initialize departments
    this.accounting = new Accounting('Accounting', 1_000_000)
    this.administration = new Administration('Administration')
    this.animalsCare = new AnimalsCare('Animals Care')
    this.marketing = new Marketing('Marketing')
    this.payOffice = new PayOffice('Pay Office')

    // Hire employees for each department
    console.log(`Zoo ${zooName} started working!`)
    this.hireEmployees()
  }

  private hireEmployees() {
    Promise.all([
      this.accounting.hireEmployees(),
      this.administration.hireEmployees(),
      this.animalsCare.hireEmployees(),
      this.marketing.hireEmployees(),
      this.payOffice.hireEmployees(),
    ]).then(employees => {
      for (const departmentEmployees of employees) {
        this.accounting.assignEmployees(departmentEmployees)
      }
    })
  }

  assignNewAnimal(kind: string) {
    const newAnimal = this.administration.requestAnimal(this.animalsCare, kind)

    if (newAnimal) {
      this.accounting.assignAnimal(newAnimal)
      this.marketing.notifyClients('We got a new animal:' + newAnimal.name)
    }
  }
}
