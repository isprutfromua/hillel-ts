/* eslint-disable padding-line-between-statements */

//Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
//Наприклад, тип значення для кожного ключа може бути число | рядок.

type NumberOrString = number | string

export interface IFirst {
  [k: NumberOrString]: unknown
}

//Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
//Ключами можуть бути рядки, а значеннями — функції, які приймають будь - які аргументи.

type TFunction = (arg: unknown) => void

export interface ISecond {
  [k: string]: TFunction
}
//Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву.
//Ключі повинні бути числами, а значення - певного типу.

type TAcceptable = NumberOrString | TFunction

export interface IThird {
  [index: number]: TAcceptable
}

//Створіть інтерфейс з певними властивостями та індексною сигнатурою.
//Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.

export interface TFourth {
  readonly id: number
  readonly alt: string
  readonly src: string
  readonly width: number
  readonly height: number

  [metaFields: string]: unknown
}

//Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.

type BigIntOrNumber = bigint | number

export interface TFifth {
  [recordData: string]: BigIntOrNumber
}

export interface TFifthExtended extends TFifth {
  recordId: number
  recordValue: bigint
}

//Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
//чи відповідають значення певних ключів певним критеріям(наприклад, чи всі значення є числами).

interface IDiary {
  [subject: string]: NumberOrString
}

type CheckFunction = (value: unknown) => boolean

const checkDiary = (
  obj: IDiary,
  subjects: string[],
  checker: CheckFunction,
) => {
  if (!subjects.length) {
    return 'please specify subjects'
  }

  for (const key of subjects) {
    if (!(key in obj)) {
      return 'wrong subject: ' + key
    }

    if (!checker(obj[key])) {
      return 'wrong key type: ' + key
    }
  }

  return true
}

const diary1: IDiary = {
  math: 12,
  science: 'A',
}

const diary2: IDiary = {
  math: 12,
  algebra: 10,
  science: 'A',
  biology: 'C',
}

const isString: CheckFunction = (el: unknown): el is string =>
  typeof el === 'string'

const isNumber: CheckFunction = (el: unknown): el is number =>
  typeof el === 'number'

checkDiary(diary1, ['science'], isString)
checkDiary(diary2, ['math', 'algebra'], isNumber)
