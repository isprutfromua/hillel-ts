import {
  AirConditioner,
  HomeControlPanel,
  Light,
  SecuritySystem,
} from '@/lessons/12/models'
import { EDeviceType } from '@/lessons/12/types'

const light = new Light()
const airConditioner = new AirConditioner()
const securitySystem = new SecuritySystem()

const panel = new HomeControlPanel(light, airConditioner, securitySystem)
const remoteControl = panel.addControl(
  [EDeviceType.AirConditioner, EDeviceType.Light],
  'remote',
)
remoteControl.enable(EDeviceType.AirConditioner)
remoteControl.enable(EDeviceType.Light)
