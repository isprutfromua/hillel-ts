export class SortableArray<T> extends Array<T> {
  toSorted(cb: (a: T, b: T) => number): T[] {
    return this.slice().sort(cb)
  }
}
