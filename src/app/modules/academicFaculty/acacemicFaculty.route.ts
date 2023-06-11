import { Router } from 'express'
import { validateRequest } from '../../../middlewares/validateRequest'
import { AcademicFacultyControllers } from './acacemicFaculty.controller'
import { AcademicFacultyValidation } from './acacemicFaculty.validation'

const router = Router()

router
  .route('/')
  .get(AcademicFacultyControllers.getAllFaculties)
  .post(
    validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
    AcademicFacultyControllers.createFaculty
  )

router
  .route('/:id')
  .get(AcademicFacultyControllers.getFaculty)
  .patch(
    validateRequest(AcademicFacultyValidation.updateFacultyZodSchema),
    AcademicFacultyControllers.updateFaculty
  )
  .delete(AcademicFacultyControllers.deleteFaculty)

export const AcademicFacultyRoutes = router
