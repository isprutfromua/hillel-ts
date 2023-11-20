import { getRandomID } from '@/helpers/functions'
import { ExternalPaymentMethod } from './ExternalPaymentMethod'
import { InternalPaymentMethod } from './InternalPaymentMethod'
import { Employee } from '../interfaces/OrganizationalUnit'
import { Domain } from '../models/Domain'
import { Contractor } from './Contractor'
import { Department } from './Department'
import { Trainee } from './Trainee'
import { AccountingDepartment } from '../interfaces/AccountingDepartment'

export class Accounting extends Department implements AccountingDepartment {
  public name: string = 'accounting'
  public domain: Domain = 'accounting'

  #subjectsBalanceList: Map<number, Department | Employee> = new Map()
  #internalPaymentProvider: InternalPaymentMethod =
    InternalPaymentMethod.getProvider()
  #externalPaymentProvider: ExternalPaymentMethod =
    ExternalPaymentMethod.getProvider()

  get balance(): number {
    let balance = 0

    this.#subjectsBalanceList.forEach(subject => {
      if (subject instanceof Department) {
        balance += subject.balance
      }
    })

    return balance
  }

  addToBalance(subject: Department | Employee): void {
    const accountingID = getRandomID()

    if (
      subject.accountingID &&
      this.#subjectsBalanceList.has(subject.accountingID)
    ) {
      console.log('Accounting: This subject is already assigned to balance')
    } else if (!subject.accountingID) {
      this.#subjectsBalanceList.set(accountingID, subject)
      console.log(`Accounting: ${subject.name} has already added to balance`)
    } else {
      console.log(
        'Accounting: Something went wrong when trying to add ' + subject.name,
      )
    }
  }

  removeFromBalance(subject: Department | Employee): void {
    if (
      subject.accountingID &&
      this.#subjectsBalanceList.has(subject.accountingID)
    ) {
      this.#subjectsBalanceList.delete(subject.accountingID)
      console.log(
        `Accounting: ${subject.name} has already removed from balance`,
      )
    } else {
      console.log(`Accounting: ${subject.name} wasn't presented on balance`)
    }
  }

  paySalaries(): void {
    this.#subjectsBalanceList.forEach(subject => {
      if (subject instanceof Contractor) {
        this.#internalPaymentProvider.pay(subject.name)
      } else if (subject instanceof Trainee) {
        this.#externalPaymentProvider.pay(subject.name)
      }
    })
  }
}
