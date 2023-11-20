import { PaymentProvider } from '../abstractions'

export class ExternalPaymentMethod extends PaymentProvider {
  static #instance: ExternalPaymentMethod

  static getProvider(): ExternalPaymentMethod {
    if (!ExternalPaymentMethod.#instance) {
      ExternalPaymentMethod.#instance = new ExternalPaymentMethod('ExternalPay')
    }

    return ExternalPaymentMethod.#instance
  }
}
