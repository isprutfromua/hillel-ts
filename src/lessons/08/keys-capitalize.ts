// Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.

const enum Actions {
  CAPITALIZE = 'capitalize',
  UPPERCASE = 'uppercase',
  LOWERCASE = 'lowercase',
  UNCAPITALIZE = 'uncapitalize',
}

type TransformedString<Action, Key> = Action extends Actions.CAPITALIZE
  ? Capitalize<Key & string>
  : Action extends Actions.UPPERCASE
  ? Uppercase<Key & string>
  : Action extends Actions.LOWERCASE
  ? Lowercase<Key & string>
  : Action extends Actions.UNCAPITALIZE
  ? Uncapitalize<Key & string>
  : never

type TransformKeys<T, A extends Actions> = {
  [K in keyof T as TransformedString<A, K>]: T[K]
}

type CapitalizeKeys<T> = TransformKeys<T, Actions.CAPITALIZE>
type UppercaseKeys<T> = TransformKeys<T, Actions.UPPERCASE>
type LowercaseKeys<T> = TransformKeys<T, Actions.LOWERCASE>
type UncapitalizeKeys<T> = TransformKeys<T, Actions.UNCAPITALIZE>

// Example usage:
type User = {
  firstName: string
  age: number
  lastName: string
}

export type CapitalizedUser = CapitalizeKeys<User> // { FirstName: string; Age: number; LastName: string; }
export type UppercasedUser = UppercaseKeys<User> // { FIRSTNAME: string; AGE: number; LASTNAME: string; }
export type LowercasesUser = LowercaseKeys<User> // { firstname: string; age: number; lastname: string; }
export type UncapitalizedUser = UncapitalizeKeys<User> // { firstName: string; age: number; lastName: string; }
