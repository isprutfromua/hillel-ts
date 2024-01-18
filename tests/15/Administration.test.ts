import { Administration } from '@/lessons/14/models/Administration'
import { IDepartment } from '@/lessons/14/interfaces/IDepartment'
import {salaries} from "@/lessons/14/mocks/salaries.ts";

describe('Administration class', () => {
  let administration: Administration

  beforeEach(() => {
    administration = new Administration('Test Department')
  })

  test('should hire employees', async () => {
    const hiredEmployees = await administration.hireEmployees()
    expect(hiredEmployees.length).toBeGreaterThan(0)
  })

  test('should release employee from department', () => {
    const mockDepartment: IDepartment = {
      name: 'Mock Department',
      employees: [{ name: 'Employee1', position: 'Manager', salary: salaries['Manager'] }],
      hireEmployee: jest.fn(),
      releaseEmployee: jest.fn(),
      calculateExpenses: jest.fn(),
      hireEmployees: jest.fn(),
    }

    administration.releaseEmployeeFromDepartment('Manager', mockDepartment)

    expect(mockDepartment.releaseEmployee).toHaveBeenCalledWith('Manager')
  })

  test('should hire employee for department', () => {
    const mockDepartment: IDepartment = {
      name: 'Mock Department',
      employees: [{ name: 'Employee1', position: 'Manager', salary: salaries['Manager'] }],
      hireEmployee: jest.fn((position: string) => {console.log(position)}),
      releaseEmployee: jest.fn(),
      calculateExpenses: jest.fn(),
      hireEmployees: jest.fn(),
    }

    administration.hireEmployeeForDepartment('Manager', mockDepartment)

    expect(mockDepartment.hireEmployee).toHaveBeenCalledWith('Manager')
  })
})
