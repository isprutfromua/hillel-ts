import { FinanceInfo } from '../interfaces/FinanceInfo'
import { PersonalInfo } from '../interfaces/PersonalInfo'

export abstract class Person implements PersonalInfo, FinanceInfo {
  #bankAccount: string

  constructor(
    public readonly name: string,
    public readonly surname: string,
    bankAccount: string,
  ) {
    this.#bankAccount = bankAccount
  }

  get bankAccount(): string {
    return '...' + this.#bankAccount.slice(-4)
  }
}
