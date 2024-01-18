import { Marketing } from '@/lessons/14/models/Marketing'
import { IClient } from '@/lessons/14/interfaces/IClient'

describe('Marketing class', () => {
  let marketing: Marketing

  beforeEach(() => {
    marketing = Marketing.getCompany()
  })

  test('should hire employees', async () => {
    const hiredEmployees = await marketing.hireEmployees()
    expect(hiredEmployees.length).toBeGreaterThan(0)
  })

  test('should add client', () => {
    const client: IClient = {
      name: 'Client1',
      phone: 1234567890,
      personalDiscount: 10,
      update: jest.fn(),
    }

    marketing.addClient(client)

    expect(marketing.clients.length).toEqual(1)
    expect(marketing.clients.at(0)).toEqual(client)
  })

  test('should notify clients', () => {
    const client1: IClient = {
      name: 'Client1',
      phone: 1234567890,
      personalDiscount: 10,
      update: jest.fn(),
    }

    const client2: IClient = {
      name: 'Client2',
      phone: 9876543210,
      personalDiscount: 15,
      update: jest.fn(),
    }

    marketing.addClient(client1)
    marketing.addClient(client2)

    const message = 'New marketing campaign launched!'
    marketing.notifyClients(message)

    expect(client1.update).toHaveBeenCalledWith(message)
    expect(client2.update).toHaveBeenCalledWith(message)
  })

  test('should have a singleton instance', () => {
    const marketingInstance1 = Marketing.getCompany()
    const marketingInstance2 = Marketing.getCompany()

    expect(marketingInstance1).toBe(marketingInstance2)
  })
})
