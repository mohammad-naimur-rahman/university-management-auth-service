import httpStatus from 'http-status'
import { SortOrder } from 'mongoose'
import ApiError from '../../../errorHandlers/ApiError'
import { paginationHelpers } from '../../../helpers/paginationHelpers'
import { GenericResponseType } from '../../../types/common/genericResponse'
import { PaginationOptionsType } from '../../../types/common/pagination'
import { AcademicSemesterType } from './academicSemester.interface'
import AcademicSemester from './academicSemester.model'
import { academicSemesterTitleCodeMapper } from './academicSemester.utils'

const createSemesterInDB = async (
  payload: AcademicSemesterType
): Promise<AcademicSemesterType> => {
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

const getAllSemesters = async (
  paginationOptions: PaginationOptionsType
): Promise<GenericResponseType<AcademicSemesterType[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions)

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  const result = await AcademicSemester.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
  const total = await AcademicSemester.countDocuments()
  return {
    meta: { page, limit, total },
    data: result,
  }
}

export const AcademicSemesterServices = {
  createSemesterInDB,
  getAllSemesters,
}
