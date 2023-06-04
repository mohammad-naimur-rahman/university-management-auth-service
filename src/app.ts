import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { UserRoutes } from './app/modules/user/user.route'
import globalErrorHandler from './middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', UserRoutes)

app.get('/', async (req: Request, res: Response) =>
  res.send('Working Successfully')
)

app.use(globalErrorHandler)

export default app
