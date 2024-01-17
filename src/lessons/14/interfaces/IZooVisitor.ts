import { TPayOfficeAction, TVisitorType } from '@/lessons/14/types'

export interface IZooVisitor {
  name: string
  type: TVisitorType
  update: (action: TPayOfficeAction) => void
  goHome: () => void
  wait: () => void
}
