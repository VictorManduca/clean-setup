import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

import { noCache } from '../middlewares/no-cache'
import env from './env'
import swaggerConfig from '../docs'

export default (app: Express): void => {
  if (env.NODE_ENV !== 'production') {
    app.use('/api-docs', noCache, serve, setup(swaggerConfig))
  }
}
