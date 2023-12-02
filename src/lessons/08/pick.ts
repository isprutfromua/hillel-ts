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

export type TPick1<T, K extends keyof T> = { [k in K]: T[k] }
export type TPick2<T, K extends keyof T> = {
  [k in keyof T as k extends K ? k : never]: T[k]
}
export type TPick3<T, K extends keyof T> = {
  [k in keyof T & K]: T[k]
}

type User = {
  name: string
  age: number
  permission: string[]
}

type UserWithoutPermissions = keyof Omit<User, 'permission'>

export type TUserWithoutPermissions = TPick1<User, UserWithoutPermissions>
export type TUserWithoutPermission1 = TPick2<User, UserWithoutPermissions>
export type TUserWithoutPermissions2 = TPick3<User, UserWithoutPermissions>
