export interface IClient {
  name: string
  phone: number
  personalDiscount: number
  update: (message: string) => void
}
