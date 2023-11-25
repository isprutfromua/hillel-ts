export interface PaymentProviderInfo {
  readonly name: string

  pay(subject: string): void
}
