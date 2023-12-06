/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром
//(або задовільним) та повертає кортеж,
//де перше значення - це тип, що функція повертає, а другий - тип її параметру

import { Equal, Expect } from '@/helpers/type-checkers'

type TReturnTuple<T extends (arg: any) => unknown> = T extends (
  param: infer P,
) => infer R
  ? [R, P]
  : never

// tests
function func1(a: number[]): number {
  return 0
}
function func2(b: string): number[] {
  return [1, 2, 3]
}
function func3(c: boolean | string): void {}
function func4(d: null): undefined {}
function func5(): number | boolean {
  return 0
}
async function func6(c: { a: string }): Promise<void> {}
function func7(c: () => Promise<number>): () => void {
  return () => {}
}

type TestCases = [
  Expect<Equal<[number, number[]], TReturnTuple<typeof func1>>>, // true
  Expect<Equal<[number[], string], TReturnTuple<typeof func2>>>, // true
  Expect<Equal<[void, boolean | string], TReturnTuple<typeof func3>>>, // true
  Expect<Equal<[undefined, null], TReturnTuple<typeof func4>>>, // true
  Expect<Equal<[number | boolean, unknown], TReturnTuple<typeof func5>>>, // true
  Expect<Equal<[Promise<void>, { a: string }], TReturnTuple<typeof func6>>>, // true
  Expect<
    Equal<[() => void, () => Promise<number>], TReturnTuple<typeof func7>>
  >, // true
]
