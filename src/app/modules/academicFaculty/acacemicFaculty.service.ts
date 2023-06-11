import httpStatus from 'http-status'
import ApiError from '../../../errorHandlers/ApiError'
import { AcademicFacultyType } from './acacemicFaculty.interface'
import AcademicFaculty from './acacemicFaculty.model'

const getFaculties = async (): Promise<AcademicFacultyType[]> => {
  const faculties = await AcademicFaculty.find()
  return faculties
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
