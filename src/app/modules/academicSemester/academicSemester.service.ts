import ApiError from '../../../errorHandlers/ApiError'
import { AcademicSemesterType } from './academicSemester.interface'
import AcademicSemester from './academicSemester.model'

const createSemesterInDB = async (payload: AcademicSemesterType) => {
  const semester = await AcademicSemester.create(payload)

  if (!semester) {
    throw new ApiError(400, 'Could not create Academic Semester')
  }

  return semester
}

export const AcademicSemesterServices = {
  createSemesterInDB,
}
