import { PaymentProvider } from '../abstractions/PaymentProvider'

export class InternalPaymentMethod extends PaymentProvider {
  static #instance: InternalPaymentMethod

  static getProvider(): InternalPaymentMethod {
    if (!InternalPaymentMethod.#instance) {
      InternalPaymentMethod.#instance = new InternalPaymentMethod('PayInternal')
    }

    return InternalPaymentMethod.#instance
  }
}
