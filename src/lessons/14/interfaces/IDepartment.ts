import { IEmployee } from '@/lessons/14/interfaces/IEmployee.ts'

export interface IDepartment {
  name: string
  employees: IEmployee[]
  calculateExpenses: () => Promise<number>
  hireEmployees: () => Promise<IEmployee[]>
  hireEmployee: (position: string) => void
  releaseEmployee: (position: string) => void
}
