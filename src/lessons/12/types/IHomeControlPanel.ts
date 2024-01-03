import { EDeviceType, IControl, TControlType } from '@/lessons/12/types'

export interface IHomeControlPanel {
  toggleDevice(type: EDeviceType): void

  leaveHome(): void

  backHome(): void

  addControl(devicesList: EDeviceType[], type: TControlType): IControl
}
