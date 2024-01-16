export interface IDatabase<T> {
  addEntity(entity: T): void
  hasEntity(entity: T): boolean
}
export class Database<T> implements IDatabase<T> {
  private _entities: Set<T> = new Set()

  addEntity(entity: T): void {
    this._entities.add(entity)
  }

  hasEntity(entity: T): boolean {
    return this._entities.has(entity)
  }

  get entities(): T[] {
    return Array.from(this._entities.values())
  }
}
