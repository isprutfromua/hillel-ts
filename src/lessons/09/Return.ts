/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Вам потрібно створити умовний тип, що служить для встановлення типу,
// що повертається з функції.Як параметр типу повинен обов'язково виступати функціональний тип.

import { Equal, Expect } from '@/helpers/type-checkers'

type TReturn<T extends (...args: any) => unknown> = T extends (
  ...args: any
) => infer R
  ? R
  : never

function func1(a: number[]): number {
  return 0
}
function func2(b: string): number[] {
  return [1, 2, 3]
}
function func3(c: boolean | string): void {}
function func4(): undefined {}
function func5(): number | boolean {
  return true
}
async function func6(): Promise<void> {}
function func7(): () => void {
  return () => {}
}
function func8(): { a: string } & { b: string } {
  return { a: 'a', b: 'b' }
}

type test = TReturn<typeof func8>
const test: test = { a: 'a', b: 'b' } // no errors

type TestCases = [
  Expect<Equal<number, TReturn<typeof func1>>>, // true
  Expect<Equal<number[], TReturn<typeof func2>>>, // true
  Expect<Equal<void, TReturn<typeof func3>>>, // true
  Expect<Equal<undefined, TReturn<typeof func4>>>, // true
  Expect<Equal<number | boolean, TReturn<typeof func5>>>, // true
  Expect<Equal<Promise<void>, TReturn<typeof func6>>>, // true
  Expect<Equal<() => void, TReturn<typeof func7>>>, // true
  Expect<Equal<{ a: string; b: string }, TReturn<typeof func8>>>, // false - 'specific' TS comparsion with intersections
  Expect<Equal<{ a: string } & { b: string }, TReturn<typeof func8>>>, // true
  Expect<Equal<{ a: string; b: string }, ReturnType<typeof func8>>>, // false - 'specific' TS comparsion with intersections
]
