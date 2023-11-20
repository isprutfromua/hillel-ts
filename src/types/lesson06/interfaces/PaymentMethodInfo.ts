export interface PaymentMethodInfo {
  readonly name: string

  pay(subject: string): void
}
