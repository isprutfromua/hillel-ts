import { Contact, Course, Position } from '@type/lesson02'

export class Lecturer {
  constructor(
    private readonly _name: string,
    private readonly _surname: string,
    private readonly _position: Position,
    private readonly _company: string,
    private readonly _experience: number,
    private readonly _courses: Course[],
    private readonly _contacts: Contact[],
  ) {}

  get name(): string {
    return this._name
  }

  get surname(): string {
    return this._surname
  }

  get position(): Position {
    return this._position
  }

  get company(): string {
    return this._company
  }

  get experience(): number {
    return this._experience
  }

  get courses(): Course[] {
    return this._courses
  }

  get contacts(): Contact[] {
    return this._contacts
  }
}
