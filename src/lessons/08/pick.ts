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

export type TPickAs<T, K extends keyof T> = {
  [key in keyof T as key extends K ? key : never]: T[key]
}
export type TPickIntersection<T, K extends keyof T> = {
  [k in keyof T & K]: T[k]
}

type User = {
  name: string
  age: number
  permission: string[]
}

type UserWithoutPermissions = keyof Omit<User, 'permission'>

export type TUserWithoutPermissions = TPickAs<User, UserWithoutPermissions>
export type TUserWithoutPermissions2 = TPickIntersection<
  User,
  UserWithoutPermissions
>
