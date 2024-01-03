import { IDevice } from '@/lessons/12/types'
import { AirConditioner } from '@/lessons/12/models'

export class AirConditionerAdapter implements IDevice {
  #airConditioner: AirConditioner

  constructor(airConditioner: AirConditioner) {
    this.#airConditioner = airConditioner
  }

  enable() {
    this.#airConditioner.start()
  }

  disable() {
    this.#airConditioner.stop()
  }

  toggle() {
    if (this.#airConditioner.isWorking) {
      this.#airConditioner.stop()
    } else {
      this.#airConditioner.start()
    }
  }
}
