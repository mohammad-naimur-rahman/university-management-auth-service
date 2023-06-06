import { Router } from 'express'
import { AcademicSemesterRoutes } from '../app/modules/academicSemester/academicSemester.route'
import { UserRoutes } from '../app/modules/user/user.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters/',
    route: AcademicSemesterRoutes,
  },
]

moduleRoutes.forEach(({ path, route }) => router.use(path, route))

export default router
