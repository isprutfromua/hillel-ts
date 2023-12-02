/**
Вам потрібно зробити свій аналог утіліти Pick, яка конструює новий тип,
який буде включати в себе лише параметри передані в цю утіліту. Наприклад:

interface User {
  name: string;
  age: number;
  permission: string[];
}

let newUser: TPick<User, "name" | "age";

повинен створити новий тип, який має включати в себе лише проперті name та age, без permissions

 */

export type TPickRecord<T, K extends keyof T> = Record<K, T[K]>
export type TPickIntersection<T, K extends keyof T> = {
  [key in keyof T & K]: T[K]
}
export type TPickAs<T, K extends keyof T> = {
  [key in keyof T as key extends K ? key : never]: T[key]
}

type User = {
  firstName: string
  age: number
  lastName: string
}

export type TUserFirstName = TPickRecord<User, 'firstName'>
export type TUserFirstName2 = TPickIntersection<User, 'firstName'>
export type TUserFirstName3 = TPickAs<User, 'firstName'>
export type TUserFirstName4 = Pick<User, 'firstName'>
