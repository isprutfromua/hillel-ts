const names: string[] = [
  'John',
  'Alice',
  'Bob',
  'Eva',
  'Michael',
  'Olivia',
  'David',
  'Sophia',
  'Daniel',
  'Emma',
  'Christopher',
  'Ava',
  'Matthew',
  'Mia',
  'Andrew',
  'Isabella',
  'James',
  'Amelia',
  'William',
  'Emily',
]

export function getRandomName(): string {
  const randomIndex = Math.floor(Math.random() * names.length)
  return names[randomIndex]
}
