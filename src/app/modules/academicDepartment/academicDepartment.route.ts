import express from 'express'
import { validateRequest } from '../../../middlewares/validateRequest'
import { AcademicDepartmentController } from './academicDepartment.controller'
import { AcademicDepartmentValidation } from './academicDepartment.validations'

const router = express.Router()

router
  .route('/')
  .get(AcademicDepartmentController.getAllDepartments)
  .post(
    validateRequest(
      AcademicDepartmentValidation.createAcademicDepartmentZodSchema
    ),
    AcademicDepartmentController.createDepartment
  )

router
  .route('/:id')
  .get(AcademicDepartmentController.getSingleDepartment)
  .patch(
    validateRequest(
      AcademicDepartmentValidation.updateAcademicDepartmentZodSchema
    ),
    AcademicDepartmentController.updateDepartment
  )
  .delete(AcademicDepartmentController.deleteDepartment)

export const AcademicDepartmentRoutes = router
