import { Request, Response } from 'express'

import { Controller } from '@presentation/protocols'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest = {
      ...(req.body || {}),
      ...(req.params || {}),
      ...(req.query || {})
    }

    const httpResponse = await controller.handle(httpRequest)
    const isSuccessStatusCode = httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299

    if (!isSuccessStatusCode) {
      return res
        .status(httpResponse.statusCode)
        .json({ error: httpResponse.body.message })
    }

    return res
      .status(httpResponse.statusCode)
      .json(httpResponse.body)
  }
}
