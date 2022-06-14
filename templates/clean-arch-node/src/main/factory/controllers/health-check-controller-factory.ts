import { Controller } from '@presentation/protocols'
import { HealthCheckController } from '@presentation/controllers'

export const makeHealthCheckController = (): Controller => {
  return new HealthCheckController()
}
