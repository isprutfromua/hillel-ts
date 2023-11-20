import { PaymentMethodInfo as PaymentProviderInfo } from '../interfaces/PaymentMethodInfo'

export abstract class PaymentProvider implements PaymentProviderInfo {
  constructor(public name: string) {}

  pay(subject: string): void {
    console.log(`Payment: Salary for ${subject} was payed with: ${this.name}`)
  }
}
