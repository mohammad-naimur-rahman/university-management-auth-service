import { Router } from 'express'
import { createUser } from './users.controller'

const router = Router()

router.route('/').post(createUser)

export default router
