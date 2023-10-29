export class SortableArray<T> extends Array<T> {
  constructor(...args: T[]) {
    super(...args)
  }

  toSorted(cb: (a: T, b: T) => number): T[] {
    return this.slice().sort(cb)
  }
}
