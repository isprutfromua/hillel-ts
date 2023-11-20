import { getPerson } from '@/helpers/functions'
import { Company } from '@/types/lesson06/classes/Company'

function initCompany() {
  const company = new Company('Hire development')

  const HRDepartment = company.openDepartment('HR', 'human resources')
  const FEDepartment = company.openDepartment('FE', 'development')
  const DEVDepartment = company.openDepartment('BE', 'development')

  HRDepartment.hireEmployee(getPerson())

  FEDepartment.hireEmployee(getPerson())
  FEDepartment.hireEmployee(getPerson())

  DEVDepartment.hireEmployee(getPerson())
  DEVDepartment.hireEmployee(getPerson())
  DEVDepartment.hireEmployee(getPerson())

  company.paySalaries()

  HRDepartment.releaseEmployees()
  DEVDepartment.releaseEmployees()
  FEDepartment.releaseEmployees()
}

initCompany()
