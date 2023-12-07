export type Expect<T extends true> = T
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 0) extends <
  T,
>() => T extends Y ? 1 : 0
  ? true
  : false
