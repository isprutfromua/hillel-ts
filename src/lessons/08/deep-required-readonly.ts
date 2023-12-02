// Вам потрібно створити тип DeepRequireReadonly який буде робити доступними
// тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.

import { TType } from './type'

type DeepRequiredReadonly<T> = {
  readonly [key in keyof T]-?: DeepRequiredReadonly<T[key]>
}

type FlatRequiredReadonly<T> = {
  readonly [key in keyof T]-?: Readonly<T[key]>
}

type DeepReadonlyX = DeepRequiredReadonly<TType>
type DeepReadonlyG = DeepReadonlyX['g']

type DeepReadonlyGG3 = DeepReadonlyG['g3'] // readonly & required
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type DeepReadonlyGG3G33 = DeepReadonlyGG3['g33'] // readonly & required

type FlatReadonlyX = FlatRequiredReadonly<TType>
type FlatReadonlyG = FlatReadonlyX['g'] // readonly

export type FlatReadonlyGG3 = FlatReadonlyG['g3'] // non readonly & non required
