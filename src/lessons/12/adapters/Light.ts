import { IDevice } from '@/lessons/12/types'
import { Light } from '@/lessons/12/models'

export class LightAdapter implements IDevice {
  #light: Light

  constructor(light: Light) {
    this.#light = light
  }

  enable() {
    this.#light.turnOn()
  }

  disable() {
    this.#light.turnOff()
  }

  toggle() {
    if (this.#light.isTurnedOn) {
      this.#light.turnOff()
    } else {
      this.#light.turnOn()
    }
  }
}
