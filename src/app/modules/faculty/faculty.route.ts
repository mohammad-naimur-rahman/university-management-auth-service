import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { FacultyController } from './faculty.controller'
import { FacultyValidation } from './faculty.validations'

const router = Router()

router.route('/').get(FacultyController.getAllFaculties)

router
  .route('/:id')
  .get(FacultyController.getSingleFaculty)
  .patch(
    validateRequest(FacultyValidation.updateFacultyZodSchema),
    FacultyController.updateFaculty
  )
  .delete(FacultyController.deleteFaculty)

export const FacultyRoutes = router
