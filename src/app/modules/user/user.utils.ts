import { AcademicSemesterType } from '../academicSemester/academicSemester.interface'
import User from './user.model'

const findLastStudentId = async (): Promise<string | null> => {
  const lastStudent = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()

  return lastStudent?.id ? lastStudent?.id?.substring(4) : null
}

export const generateStudentId = async (
  academicSemester: AcademicSemesterType
): Promise<string> => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0')
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementedId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementedId}`
  return incrementedId
}

const findLastFacultytId = async (): Promise<string | null> => {
  const lastFaculty = await User.findOne({ role: 'faculty' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()

  return lastFaculty?.id ? lastFaculty?.id?.substring(2) : null
}

export const generateFacultyId = async (): Promise<string> => {
  const currentId =
    (await findLastFacultytId()) || (0).toString().padStart(5, '0')
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementedId = `F-${incrementedId}`
  return incrementedId
}

const findLastAdminId = async (): Promise<string | null> => {
  const lastAdmin = await User.findOne({ role: 'admin' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()

  return lastAdmin?.id ? lastAdmin?.id?.substring(2) : null
}

export const generateAdminId = async (): Promise<string> => {
  const currentId = (await findLastAdminId()) || (0).toString().padStart(5, '0')
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementedId = `A-${incrementedId}`
  return incrementedId
}
