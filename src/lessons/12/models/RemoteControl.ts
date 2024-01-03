import { EDeviceType, IControl, IDevice, TDeviceInfo } from '@/lessons/12/types'

export class RemoteControl implements IControl {
  #devices: Map<EDeviceType, IDevice> = new Map()

  constructor(devices: TDeviceInfo[]) {
    this.#devices = new Map(devices)
  }

  enable(deviceType: EDeviceType) {
    if (this.#devices.has(deviceType)) {
      this.#devices.get(deviceType)!.enable()
    }
  }

  disable(deviceType: EDeviceType) {
    if (this.#devices.has(deviceType)) {
      this.#devices.get(deviceType)!.disable()
    }
  }

  toggle(deviceType: EDeviceType) {
    if (this.#devices.has(deviceType)) {
      this.#devices.get(deviceType)!.toggle()
    }
  }
}
export function initRemoteControl(devices: TDeviceInfo[]) {
  return new RemoteControl(devices)
}
