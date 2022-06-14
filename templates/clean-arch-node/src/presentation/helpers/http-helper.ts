import { HttpResponse } from '../protocols/http'

export const emptyOk = (): HttpResponse => ({
  statusCode: 200
})
