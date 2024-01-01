import { IDevice } from '@/lessons/12/types'
import { SecuritySystem } from '@/lessons/12/models'

export class SecuritySystemAdapter implements IDevice {
  #securitySystem: SecuritySystem

  constructor(securitySystem: SecuritySystem) {
    this.#securitySystem = securitySystem
  }

  enable() {
    this.#securitySystem.enable()
  }

  disable() {
    this.#securitySystem.disable()
  }

  toggle() {
    if (this.#securitySystem.isWatching) {
      this.#securitySystem.disable()
    } else {
      this.#securitySystem.enable()
    }
  }
}
