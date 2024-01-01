import { EDeviceType } from '@/lessons/12/types'

export interface IControl {
  enable(deviceType: EDeviceType): void

  disable(deviceType: EDeviceType): void

  toggle(deviceType: EDeviceType): void
}
