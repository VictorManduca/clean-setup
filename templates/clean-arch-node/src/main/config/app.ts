import express from 'express'
import cors from 'cors'

import setupRoutes from './routes'
import setupSwagger from './swagger'

const app = express()

app.use(cors())

setupRoutes(app)
setupSwagger(app)

export default app
