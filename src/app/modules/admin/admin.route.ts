import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AdminController } from './admin.controller'
import { AdminValidation } from './admin.validation'

const router = Router()

router.route('/').get(AdminController.getAllAdmins)

router
  .route('/:id')
  .get(AdminController.getSingleAdmin)
  .patch(
    validateRequest(AdminValidation.updateAdmin),
    AdminController.updateAdmin
  )
  .delete(AdminController.deleteAdmin)

export const AdminRoutes = router
