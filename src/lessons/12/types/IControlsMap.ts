import { TDeviceInfo } from '@/lessons/12/types'
import { RemoteControl } from '@/lessons/12/models'

export type TControlType = 'remote'
export type IControlsMap = {
  [key in TControlType]: (devices: TDeviceInfo[]) => RemoteControl
}
