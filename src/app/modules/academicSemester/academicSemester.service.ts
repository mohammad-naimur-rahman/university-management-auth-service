import httpStatus from 'http-status'
import { SortOrder } from 'mongoose'
import ApiError from '../../../errorHandlers/ApiError'
import { paginationHelpers } from '../../../helpers/paginationHelpers'
import { GenericResponseType } from '../../../types/common/genericResponse'
import {
  FiltersType,
  PaginationOptionsType,
} from '../../../types/common/pagination'
import { isNonEmptyObj } from '../../../utils/isNonEmptyObj'
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
  filters: FiltersType,
  paginationOptions: PaginationOptionsType
): Promise<GenericResponseType<AcademicSemesterType[]>> => {
  const { searchTerm, ...filtersData } = filters

  const andConditionsArr = ['title', 'code', 'year']

  const andConditions: Array<object> = []

  if (searchTerm) {
    andConditions.push({
      $or: andConditionsArr.map(condition => ({
        [condition]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (isNonEmptyObj(filtersData)) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions)

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  const whereConditions: object =
    andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await AcademicSemester.find(whereConditions)
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
