import { Router } from 'express'

import { adaptRoute } from '@main/adapters'
import { makeHealthCheckController } from '@main/factory/controllers'

export default (router: Router): void => {
  router.get('/health-check', adaptRoute(makeHealthCheckController()))
}
