import { IZooVisitor } from '@/lessons/14/interfaces/IZooVisitor.ts'
import { ZooVisitor } from '@/lessons/14/models/ZooVisitor.ts'
import { TVisitorType } from '@/lessons/14/types'

export class ZooVisitorFactory {
  createVisitor(name: string, type: TVisitorType): IZooVisitor {
    return new ZooVisitor(name, type)
  }
}
