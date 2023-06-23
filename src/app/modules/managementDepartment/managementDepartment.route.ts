import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { ManagementDepartmentController } from './managementDepartment.controller'
import { ManagementDepartmentValidation } from './managementDepartment.validation'

const router = Router()

router
  .route('/')
  .get(ManagementDepartmentController.getAllDepartments)
  .post(
    validateRequest(
      ManagementDepartmentValidation.createManagementDepartmentZodSchema
    ),
    ManagementDepartmentController.createDepartment
  )

router
  .route('/:id')
  .get(ManagementDepartmentController.getSingleDepartment)
  .patch(
    validateRequest(
      ManagementDepartmentValidation.updateManagementDepartmentZodSchema
    ),
    ManagementDepartmentController.updateDepartment
  )
  .delete(ManagementDepartmentController.deleteDepartment)

export const ManagementDepartmentRoutes = router
