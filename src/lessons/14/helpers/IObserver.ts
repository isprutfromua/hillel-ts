export interface IObserver<Data> {
  update(message: Data): void
}
