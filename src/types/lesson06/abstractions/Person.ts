import { FinanceInfo, PersonalInfo } from '../interfaces'

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
