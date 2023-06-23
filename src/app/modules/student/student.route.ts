import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { StudentController } from './student.controller'
import { StudentValidaion } from './student.validation'

const router = Router()

router.route('/').get(StudentController.getAllStudents)

router
  .route('/:id')
  .get(StudentController.getSingleStudent)
  .patch(
    validateRequest(StudentValidaion.updateStudentZodSchema),
    StudentController.updateStudent
  )
  .delete(StudentController.deleteStudent)

export const StudentRoutes = router
