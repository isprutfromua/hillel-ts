enum ESortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

interface IEntity {
  id: number
}

type TCompareFunction<T> = (a: T, b: T) => -1 | 0 | 1
type TSortFunction<U> = <T extends U>(
  values: T[],
  order: ESortOrder,
  property: keyof T,
) => T[]

const getComparisonFunction = <T, K extends keyof T>(
  order: ESortOrder,
  property: K,
): TCompareFunction<T> => {
  return (a, b) => {
    const valueA = a[property]
    const valueB = b[property]

    if (valueA === valueB) {
      return 0
    }

    if (order === ESortOrder.Asc) {
      return valueA < valueB ? -1 : 1
    } else {
      return valueA > valueB ? -1 : 1
    }
  }
}

const sortEntities: TSortFunction<IEntity> = <T extends IEntity>(
  entities: T[],
  order: ESortOrder,
  property: keyof T,
) => {
  const compareFunction = getComparisonFunction<T, keyof T>(order, property)

  return entities.sort(compareFunction)
}

export const sortEntitiesById = (
  entities: IEntity[],
  order: ESortOrder = ESortOrder.Asc,
) => {
  return sortEntities(entities, order, 'id')
}

// tests
const entities: IEntity[] = [
  { id: 3 },
  { id: 1 },
  { id: 2 },
  { id: 10 },
  { id: 20 },
]

const asc = JSON.stringify([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 10 },
  { id: 20 },
])
const desc = JSON.stringify([
  { id: 20 },
  { id: 10 },
  { id: 3 },
  { id: 2 },
  { id: 1 },
])

const sortedEntitiesAsc = sortEntitiesById(entities, ESortOrder.Asc)
console.assert(
  JSON.stringify(sortedEntitiesAsc) === asc,
  'Wrong ascending sorting',
)

const sortedEntitiesDesc = sortEntitiesById(entities, ESortOrder.Desc)
console.assert(
  JSON.stringify(sortedEntitiesDesc) === desc,
  'Wrong descending sorting',
)
