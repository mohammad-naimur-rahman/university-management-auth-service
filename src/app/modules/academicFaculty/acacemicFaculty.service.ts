import httpStatus from 'http-status'
import { SortOrder } from 'mongoose'
import ApiError from '../../../errorHandlers/ApiError'
import { paginationHelpers } from '../../../helpers/paginationHelpers'
import { PaginationOptionsType } from '../../../types/common/pagination'
import { GenericResponseType } from './../../../types/common/genericResponse'
import {
  AcademicFacultyFiltersType,
  AcademicFacultyType,
} from './acacemicFaculty.interface'
import AcademicFaculty from './acacemicFaculty.model'
import { academicFacultySearchableFields } from './acacemicFaculty.utils'

const getFaculties = async (
  filters: AcademicFacultyFiltersType,
  paginationOptions: PaginationOptionsType
): Promise<GenericResponseType<AcademicFacultyType[]>> => {
  const { searchTerm, ...filtersData } = filters
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions)

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      $or: academicFacultySearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await AcademicFaculty.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await AcademicFaculty.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const getFacultyById = async (id: string): Promise<AcademicFacultyType> => {
  const faculty = await AcademicFaculty.findById(id)

  if (!faculty) {
    throw new ApiError(httpStatus.BAD_REQUEST, `No faculty found with id ${id}`)
  }
  return faculty
}

const createFaculty = async (
  payload: AcademicFacultyType
): Promise<AcademicFacultyType> => {
  return await AcademicFaculty.create(payload)
}

const updateFaculty = async (
  id: string,
  payload: Partial<AcademicFacultyType>
): Promise<AcademicFacultyType> => {
  const faculty = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  if (!faculty) {
    throw new ApiError(httpStatus.BAD_REQUEST, `No faculty found with id ${id}`)
  }
  return faculty
}

const deleteFaculty = async (id: string): Promise<AcademicFacultyType> => {
  const result = await AcademicFaculty.findByIdAndDelete(id)

  if (result === null) {
    throw new ApiError(httpStatus.BAD_REQUEST, `No faculty found with id ${id}`)
  }

  return result
}

export const AcademicFacultyServices = {
  getFaculties,
  getFacultyById,
  createFaculty,
  updateFaculty,
  deleteFaculty,
}
