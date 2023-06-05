import { Router } from 'express'
import { validateRequest } from '../../../middlewares/validateRequest'
import { AcademcSemisterController } from './academicSemester.controller'
import { AcademicSemesterValidation } from './academicSemester.validation'

const router = Router()

router
  .route('/')
  .post(
    validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
    AcademcSemisterController.createSemester
  )

export const AcademicSemesterRoutes = router
