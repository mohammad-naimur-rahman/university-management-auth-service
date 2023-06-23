import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterController } from './academicSemester.controller'
import { AcademicSemesterValidation } from './acdemicSemester.validation'

const router = Router()

router
  .route('/')
  .get(AcademicSemesterController.getAllSemesters)
  .post(
    validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
    AcademicSemesterController.createSemester
  )

router
  .route('/:id')
  .get(AcademicSemesterController.getSingleSemester)
  .patch(
    validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
    AcademicSemesterController.updateSemester
  )
  .delete(AcademicSemesterController.deleteSemester)

export const AcademicSemesterRoutes = router
