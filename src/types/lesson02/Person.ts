import { Domain, Lesson, Mark } from '@type/lesson02'

export type Contact = {
  readonly phone: `+${number}`
  readonly email: `${string}@${string}.${Domain}`
}
export type FullName = `${string} ${string}`
export type Grade = Record<string, Mark>
export type Course = string
export type Visit = Record<Lesson, boolean>
