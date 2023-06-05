import { Router } from 'express'
import { validateRequest } from '../../../middlewares/validateRequest'
import { AcademicSemesterValidation } from './academicSemester.validation'

const router = Router()

router.route('/').post(
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
  //UserController.createUser
)

export const AcademicSemesterRoutes = router
