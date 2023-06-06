import httpStatus from 'http-status'
import ApiError from '../../../errorHandlers/ApiError'
import { AcademicSemesterType } from './academicSemester.interface'
import AcademicSemester from './academicSemester.model'
import { academicSemesterTitleCodeMapper } from './academicSemester.utils'

const createSemesterInDB = async (payload: AcademicSemesterType) => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Did not match with semester code!'
    )
  }
  const semester = await AcademicSemester.create(payload)

  if (!semester) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Could not create Academic Semester'
    )
  }

  return semester
}

export const AcademicSemesterServices = {
  createSemesterInDB,
}
