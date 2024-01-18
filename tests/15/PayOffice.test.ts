import { PayOffice } from '@/lessons/14/models/PayOffice'
import { IZooVisitor } from '@/lessons/14/interfaces/IZooVisitor'
import { TPayOfficeAction, TVisitorType } from '@/lessons/14/types'

describe('PayOffice class', () => {
  let payOffice: PayOffice

  beforeEach(() => {
    payOffice = new PayOffice('Test Department')
  })

  test('should hire employees', async () => {
    const hiredEmployees = await payOffice.hireEmployees()
    expect(hiredEmployees.length).toBeGreaterThan(0)
  })

  test('should sell tickets', () => {
    const type: TVisitorType = 'adult'
    const count = 3

    payOffice.selTicket(type, count)

    expect(payOffice.tickets[type]).toEqual(97)
    expect(payOffice.sells[type]).toEqual(count)
  })

  test('should throw error when selling more tickets than available', () => {
    const type: TVisitorType = 'child'
    const count = 105

    expect(() => payOffice.selTicket(type, count)).toThrow('we don`t have enough tickets')
  })

  test('should calculate profit', () => {
    payOffice.selTicket('family', 2)
    payOffice.selTicket('adult', 3)
    payOffice.selTicket('child', 5)

    const profit = payOffice.calculateProfit()

    expect(profit).toEqual(2 * 30 + 3 * 10 + 5 * 2)
  })

  test('should add visitor to queue', () => {
    const visitor: IZooVisitor = {
      name: 'Visitor1',
      type: 'adult',
      update: jest.fn(),
      goHome: jest.fn(),
      wait: jest.fn(),
    }

    payOffice.addVisitorToQueue(visitor)

    expect(payOffice.visitorsQueue.length).toEqual(1)
    expect(payOffice.visitorsQueue.at(0)).toEqual(visitor)
  })

  test('should notify visitors in the queue', () => {
    const visitor1: IZooVisitor = {
      name: 'Visitor1',
      type: 'adult',
      update: jest.fn(),
      goHome: jest.fn(),
      wait: jest.fn(),
    }

    const visitor2: IZooVisitor = {
      name: 'Visitor2',
      type: 'child',
      update: jest.fn(),
      goHome: jest.fn(),
      wait: jest.fn(),
    }

    payOffice.addVisitorToQueue(visitor1)
    payOffice.addVisitorToQueue(visitor2)

    const action: TPayOfficeAction = 'closing'
    payOffice.notifyVisitors(action)

    expect(visitor1.update).toHaveBeenCalledWith(action)
    expect(visitor2.update).toHaveBeenCalledWith(action)
  })
})
