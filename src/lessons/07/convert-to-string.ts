export function convertToString<T>(input: T): string | undefined {
  if (input && typeof input.toString === 'function') {
    return input.toString()
  } else {
    return undefined
  }
}

convertToString<number>(3)
convertToString<string>('2')
convertToString<boolean>(true)
convertToString<undefined>(undefined)

interface IConvertable {
  toString(): string
}

export function convertToString2<T extends IConvertable>(input: T): string {
  return input.toString()
}

const newNumber = new Number(3)

convertToString2(2)
convertToString2(newNumber)
convertToString2('2')
convertToString2(true)
convertToString2([1, 2, 3])

// convertToString2(undefined) // invalid

// convertToString2(null) // invalid
