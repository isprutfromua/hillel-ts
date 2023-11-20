import { Employee } from './interfaces/OrganizationalUnit'
import { Contractor } from './classes/Contractor'

export const isContractor = (subject: Employee): subject is Contractor => {
  return (subject as Contractor).status !== undefined
}
