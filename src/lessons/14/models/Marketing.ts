import { IClient } from '@/lessons/14/interfaces/IClient.ts'
import { Department } from '@/lessons/14/models/Department.ts'

export class Marketing extends Department {
  _clients: IClient[] = []

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
}
