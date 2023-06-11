import { Router } from 'express'
import { AcademicFacultyRoutes } from '../app/modules/academicFaculty/acacemicFaculty.route'
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
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
]

moduleRoutes.forEach(({ path, route }) => router.use(path, route))

export default router
