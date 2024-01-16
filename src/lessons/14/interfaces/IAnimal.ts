export interface IAnimal {
  age: number
  foodPreferences: string[]
  foodRequiredAmount: number
  howManyFeed: number
  name: string
  species: string
}
export class Animal implements IAnimal {
  constructor(
    public age: number,
    public foodPreferences: string[],
    public foodRequiredAmount: number,
    public howManyFeed: number,
    public name: string,
    public species: string,
  ) {}
}
export const zooAnimalsMocks: IAnimal[] = [
  {
    age: 3,
    foodPreferences: ['grass', 'leaves'],
    foodRequiredAmount: 5,
    howManyFeed: 2,
    name: 'Lenny',
    species: 'Giraffe',
  },
  {
    age: 5,
    foodPreferences: ['fish', 'shrimp'],
    foodRequiredAmount: 3,
    howManyFeed: 1,
    name: 'Nemo',
    species: 'Fish',
  },
  {
    age: 2,
    foodPreferences: ['insects', 'fruits'],
    foodRequiredAmount: 4,
    howManyFeed: 3,
    name: 'Ziggy',
    species: 'Monkey',
  },
  {
    age: 4,
    foodPreferences: ['meat', 'bones'],
    foodRequiredAmount: 6,
    howManyFeed: 2,
    name: 'Rocky',
    species: 'Lion',
  },
  {
    age: 1,
    foodPreferences: ['bamboo', 'shoots'],
    foodRequiredAmount: 7,
    howManyFeed: 3,
    name: 'BamBam',
    species: 'Panda',
  },
  {
    age: 6,
    foodPreferences: ['seeds', 'worms'],
    foodRequiredAmount: 2,
    howManyFeed: 2,
    name: 'Tweety',
    species: 'Bird',
  },
  {
    age: 3,
    foodPreferences: ['hay', 'carrots'],
    foodRequiredAmount: 5,
    howManyFeed: 2,
    name: 'Thumper',
    species: 'Rabbit',
  },
  {
    age: 2,
    foodPreferences: ['ants', 'berries'],
    foodRequiredAmount: 4,
    howManyFeed: 3,
    name: 'Antonia',
    species: 'Anteater',
  },
  {
    age: 8,
    foodPreferences: ['mice', 'cheese'],
    foodRequiredAmount: 3,
    howManyFeed: 1,
    name: 'Whiskers',
    species: 'Cat',
  },
  {
    age: 7,
    foodPreferences: ['krill', 'squid'],
    foodRequiredAmount: 4,
    howManyFeed: 2,
    name: 'Squiggly',
    species: 'Penguin',
  },
  {
    age: 5,
    foodPreferences: ['grass', 'bugs'],
    foodRequiredAmount: 6,
    howManyFeed: 2,
    name: 'Buzz',
    species: 'Elephant',
  },
  {
    age: 2,
    foodPreferences: ['plankton', 'algae'],
    foodRequiredAmount: 3,
    howManyFeed: 1,
    name: 'Marina',
    species: 'Turtle',
  },
  {
    age: 4,
    foodPreferences: ['honey', 'pollen'],
    foodRequiredAmount: 2,
    howManyFeed: 1,
    name: 'Buzzie',
    species: 'Bee',
  },
  {
    age: 6,
    foodPreferences: ['worms', 'insects'],
    foodRequiredAmount: 5,
    howManyFeed: 2,
    name: 'Spike',
    species: 'Hedgehog',
  },
  {
    age: 3,
    foodPreferences: ['algae', 'plankton'],
    foodRequiredAmount: 4,
    howManyFeed: 2,
    name: 'Sandy',
    species: 'Seahorse',
  },
  {
    age: 1,
    foodPreferences: ['nuts', 'fruits'],
    foodRequiredAmount: 3,
    howManyFeed: 1,
    name: 'Nutty',
    species: 'Squirrel',
  },
  {
    age: 5,
    foodPreferences: ['grass', 'flowers'],
    foodRequiredAmount: 4,
    howManyFeed: 2,
    name: 'Flora',
    species: 'Gorilla',
  },
  {
    age: 2,
    foodPreferences: ['bamboo', 'leaves'],
    foodRequiredAmount: 6,
    howManyFeed: 3,
    name: 'BamBam',
    species: 'Koala',
  },
  {
    age: 4,
    foodPreferences: ['insects', 'fruits'],
    foodRequiredAmount: 5,
    howManyFeed: 2,
    name: 'Flutter',
    species: 'Butterfly',
  },
  {
    age: 3,
    foodPreferences: ['seeds', 'worms'],
    foodRequiredAmount: 3,
    howManyFeed: 1,
    name: 'Feather',
    species: 'Parrot',
  },
]
export const animals: Animal[] = zooAnimalsMocks.map(
  ({ age, foodPreferences, foodRequiredAmount, howManyFeed, name, species }) =>
    new Animal(
      age,
      foodPreferences,
      foodRequiredAmount,
      howManyFeed,
      name,
      species,
    ),
)
