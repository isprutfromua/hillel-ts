// Вам потрібно створити тип DeepReadonly який буде робити
// доступними тільки для читання навіть властивості вкладених обʼєктів.

import { TType } from './type'

type DeepReadonly<T> = {
  readonly [key in keyof T]: DeepReadonly<T[key]>
}

type FlatReadonly<T> = {
  readonly [key in keyof T]: Readonly<T[key]>
}

type DeepReadonlyType = DeepReadonly<TType>
type DeepReadonlyG = DeepReadonlyType['g'] // readonly

export type DeepReadonlyGG3 = DeepReadonlyG['g3'] // readonly
export type DeepReadonlyGG333 = DeepReadonlyGG3['g33'] // readonly

type FlatReadonlyType = FlatReadonly<TType>
type FlatReadonlyG = FlatReadonlyType['g'] // readonly

export type FlatReadonlyG3 = FlatReadonlyG['g3'] // non readonly
