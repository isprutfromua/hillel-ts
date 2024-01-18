import { Zoo } from '@/lessons/14/models/Zoo'
import { IZooVisitor } from '@/lessons/14/interfaces/IZooVisitor'
import {IAnimal} from "@/lessons/14/interfaces/IAnimal.ts";

describe('Zoo class', () => {
  let zoo: Zoo

  beforeEach(() => {
    zoo = new Zoo('Test Zoo')
  })

  test('should initialize departments', () => {
    expect(zoo.accounting).toBeDefined()
    expect(zoo.administration).toBeDefined()
    expect(zoo.animalsCare).toBeDefined()
    expect(zoo.marketing).toBeDefined()
    expect(zoo.payOffice).toBeDefined()
  })

  test('should hire employees for all departments', async () => {
    expect(zoo.accounting.employees.length).toBeGreaterThan(0)
    expect(zoo.administration.employees.length).toBeGreaterThan(0)
    expect(zoo.animalsCare.employees.length).toBeGreaterThan(0)
    expect(zoo.marketing.employees.length).toBeGreaterThan(0)
    expect(zoo.payOffice.employees.length).toBeGreaterThan(0)
  })

  test('should assign a new animal', () => {
    const notifyClientsSpy = jest.spyOn(zoo.marketing, 'notifyClients')

    const animalKind = 'Lion'
    const mockAnimal: IAnimal = {
      species: animalKind,
      name: 'Charlie',
      foodCost: 100,
      age: 5
    }
    zoo.assignNewAnimal(animalKind)

    // Verify that the animal was assigned to Accounting and Marketing
    expect(zoo.accounting.animalsList).toContainEqual(mockAnimal)
    expect(notifyClientsSpy).toHaveBeenCalled()
  })

  test('should simulate zoo visitors', () => {
    const visitor: IZooVisitor = {
      name: 'Visitor1',
      type: 'adult',
      update: jest.fn(),  // Use jest.fn() to create a mock function
      goHome: jest.fn(),
      wait: jest.fn(),
    }

    zoo.payOffice.addVisitorToQueue(visitor)

    // Simulate the process of visitors waiting and updating
    zoo.payOffice.notifyVisitors('dinner')
    expect(visitor.update).toHaveBeenCalledWith('dinner')
  })
})
