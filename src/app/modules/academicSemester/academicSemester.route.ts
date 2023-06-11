import { Router } from 'express'
import { validateRequest } from '../../../middlewares/validateRequest'
import { AcademcSemisterController } from './academicSemester.controller'
import { AcademicSemesterValidation } from './academicSemester.validation'

const router = Router()

router
  .route('/')
  .get(AcademcSemisterController.getAllSemesters)
  .post(
    validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
    AcademcSemisterController.createSemester
  )

router
  .route('/:id')
  .get(AcademcSemisterController.getSemester)
  .patch(
    validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
    AcademcSemisterController.updateSemester
  )

export const AcademicSemesterRoutes = router
