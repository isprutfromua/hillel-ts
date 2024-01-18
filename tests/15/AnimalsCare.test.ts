import { AnimalsCare } from '@/lessons/14/models/AnimalsCare'

describe('AnimalsCare class', () => {
  let animalsCare: AnimalsCare

  beforeEach(() => {
    animalsCare = new AnimalsCare('Test Department')
  })

  test('should hire employees', async () => {
    const hiredEmployees = await animalsCare.hireEmployees()
    expect(hiredEmployees.length).toBeGreaterThan(0)
  })

  test('should bring animal to AnimalsCare department', () => {
    const animalKind = 'Lion'
    const broughtAnimal = animalsCare.bringAnimal(animalKind)

    expect(broughtAnimal).toBeDefined()
    expect(broughtAnimal?.species).toEqual(animalKind)
    expect(animalsCare.animals.length).toEqual(1)
  })

  test('should not bring unknown animal to AnimalsCare department', () => {
    const animalKind = 'Dragon'
    const consoleErrorSpy = jest.spyOn(console, 'error')
    consoleErrorSpy.mockImplementation(() => {})

    const broughtAnimal = animalsCare.bringAnimal(animalKind)

    expect(broughtAnimal).toBeUndefined()
    expect(consoleErrorSpy).toHaveBeenCalledWith(`We can\`t assign ${animalKind} to our zoo`)
    expect(animalsCare.animals.length).toEqual(0)

    consoleErrorSpy.mockRestore()
  })

  test('should release animal from AnimalsCare department', () => {
    const animalKind = 'Lion'
    animalsCare.bringAnimal(animalKind)

    const releasedAnimal = animalsCare.releaseAnimal(animalKind)

    expect(releasedAnimal).toBeDefined()
    expect(releasedAnimal?.species).toEqual(animalKind)
    expect(animalsCare.animals.length).toEqual(0)
  })

  test('should not release unknown animal from AnimalsCare department', () => {
    const animalKind = 'Dragon'
    const consoleErrorSpy = jest.spyOn(console, 'error')
    consoleErrorSpy.mockImplementation(() => {})

    const releasedAnimal = animalsCare.releaseAnimal(animalKind)

    expect(releasedAnimal).toBeUndefined()
    expect(consoleErrorSpy).toHaveBeenCalledWith(`We don\`t have ${animalKind} in our zoo`)
    expect(animalsCare.animals.length).toEqual(0)

    consoleErrorSpy.mockRestore()
  })
})
