import {
  EDeviceType,
  IControl,
  IDevice,
  IHomeControlPanel,
  TControlType,
  TDeviceInfo,
} from '@/lessons/12/types'
import {
  AirConditioner,
  controlsMap,
  Light,
  SecuritySystem,
} from '@/lessons/12/models'
import {
  AirConditionerAdapter,
  LightAdapter,
  SecuritySystemAdapter,
} from '@/lessons/12/adapters'

export class HomeControlPanel implements IHomeControlPanel {
  #devices: Map<EDeviceType, IDevice> = new Map()
  #controls: Set<IControl> = new Set()

  constructor(
    light: Light,
    airConditioner: AirConditioner,
    securitySystem: SecuritySystem,
  ) {
    this.#devices.set(EDeviceType.Light, new LightAdapter(light))
    this.#devices.set(
      EDeviceType.SecuritySystem,
      new SecuritySystemAdapter(securitySystem),
    )
    this.#devices.set(
      EDeviceType.AirConditioner,
      new AirConditionerAdapter(airConditioner),
    )
  }

  toggleDevice(type: EDeviceType) {
    // Some additional business logic.....

    if (this.#devices.has(type)) {
      this.#devices.get(type)!.toggle()
    }
  }

  leaveHome(): void {
    // Some additional business logic.....
    const offList = [EDeviceType.Light, EDeviceType.AirConditioner]
    const onList = [EDeviceType.SecuritySystem]

    offList.forEach(deviceType => {
      const device = this.#devices.get(deviceType)
      if (device) {
        device.disable()
      }
    })

    onList.forEach(deviceType => {
      const device = this.#devices.get(deviceType)
      if (device) {
        device.enable()
      }
    })
  }

  backHome(): void {
    // Some additional business logic.....
    const onList = [EDeviceType.Light, EDeviceType.AirConditioner]
    const offList = [EDeviceType.SecuritySystem]

    offList.forEach(deviceType => {
      const device = this.#devices.get(deviceType)
      if (device) {
        device.disable()
      }
    })

    onList.forEach(deviceType => {
      const device = this.#devices.get(deviceType)
      if (device) {
        device.enable()
      }
    })
  }

  addControl(devicesList: EDeviceType[], type: TControlType = 'remote') {
    const devices: TDeviceInfo[] = []

    for (const deviceType of devicesList) {
      if (this.#devices.has(deviceType)) {
        devices.push([deviceType, this.#devices.get(deviceType)!])
      }
    }

    const newControl = controlsMap[type](devices)
    this.#controls.add(newControl)

    return newControl
  }
}
