import { HttpResponse } from '@presentation/protocols'
import { Controller } from '@presentation/protocols/controller'
import { emptyOk } from '@presentation/helpers/http-helper'

export class HealthCheckController implements Controller {
  async handle (): Promise<HttpResponse> {
    return emptyOk()
  }
}
