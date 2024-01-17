import { IClient } from '@/lessons/14/interfaces/IClient.ts'
import { Department } from '@/lessons/14/models/Department.ts'

export class Marketing extends Department {
  private static instance: Marketing
  _clients: IClient[] = []

  private constructor() {
    super('Super Marketing Company')
  }

  async hireEmployees() {
    this.hireEmployee('Marketing Specialist')
    this.hireEmployee('Digital Marketing Manager')
    this.hireEmployee('Content Writer')
    this.hireEmployee('Graphic Designer')
    this.hireEmployee('Social Media Coordinator')

    return this.employees
  }

  addClient(client: IClient) {
    this._clients.push(client)
  }

  notifyClients(message: string) {
    this._clients.forEach(client => client.update(message))
  }

  public static getCompany(): Marketing {
    if (!Marketing.instance) {
      Marketing.instance = new Marketing()
    }

    return Marketing.instance
  }
}
