/*
    Generate class interface from list with types:

    {
      level: Level
      student: Student
    }

    into

    {
      levels: Level[]
      addLevel: (level: Level) => void
      removeLevel: (level: Level) => void
      student: Student[]
      addStudent: (student: Student) => void
      removeStudent: (student: Student) => void
    }

    This is not a very useful functionality in general,
    but was created to use more knowledge from the lesson :)
*/
type Adders<T> = {
  [K in keyof T & string as `add${Capitalize<K>}`]: (value: T[K]) => void
}
type Removers<T> = {
  [K in keyof T & string as `remove${Capitalize<K>}`]: (value: T[K]) => void
}
type Collections<T> = {
  [K in keyof T & string as `${K}s`]: Array<T[K]>
}

export type ClassBuilder<T> = Collections<T> & Removers<T> & Adders<T>
