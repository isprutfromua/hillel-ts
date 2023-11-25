import { PaymentProvider } from '../abstractions'

export class InternalPaymentMethod extends PaymentProvider {
  static #instance: InternalPaymentMethod

  static getProvider(): InternalPaymentMethod {
    if (!InternalPaymentMethod.#instance) {
      InternalPaymentMethod.#instance = new InternalPaymentMethod('PayInternal')
    }

    return InternalPaymentMethod.#instance
  }
}
