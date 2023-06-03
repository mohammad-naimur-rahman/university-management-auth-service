import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response) =>
  res.send('Working Successfully')
)

app.use(globalErrorHandler)

export default app
