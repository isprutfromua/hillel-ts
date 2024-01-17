import { IZooVisitor } from '@/lessons/14/interfaces/IZooVisitor.ts'
import { TPayOfficeAction, TVisitorType } from '@/lessons/14/types'

export class ZooVisitor implements IZooVisitor {
  constructor(
    public name: string,
    public type: TVisitorType,
  ) {}

  update(action: TPayOfficeAction): void {
    switch (action) {
      case 'sold out':
      case 'closing': {
        this.goHome()
        break
      }
      case 'dinner': {
        this.wait()
        break
      }
    }
  }

  goHome(): void {
    console.log(`${this.name} is going home.`)
  }

  wait(): void {
    console.log(`${this.name} is waiting.`)
  }
}
