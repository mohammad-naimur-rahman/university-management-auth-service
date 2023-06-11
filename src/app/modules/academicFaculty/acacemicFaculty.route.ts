import { Router } from 'express'
import { AcademicFacultyControllers } from './acacemicFaculty.controller'

const router = Router()

router
  .route('/')
  .get(AcademicFacultyControllers.getAllFaculties)
  .post(AcademicFacultyControllers.createFaculty)

router
  .route('/:id')
  .get(AcademicFacultyControllers.getFaculty)
  .patch(AcademicFacultyControllers.updateFaculty)
  .delete(AcademicFacultyControllers.deleteFaculty)

export const AcademicFacultyRoutes = router
