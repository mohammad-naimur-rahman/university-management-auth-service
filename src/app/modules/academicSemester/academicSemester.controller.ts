import { RequestHandler } from 'express'
import asyncHandler from 'express-async-handler'
import { pick } from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { AcademicSemesterType } from './academicSemester.interface'
import { AcademicSemesterServices } from './academicSemester.service'

const createSemester: RequestHandler = asyncHandler(async (req, res) => {
  const createdUser = await AcademicSemesterServices.createSemesterInDB(
    req.body
  )
  sendResponse<AcademicSemesterType>(res, {
    data: createdUser,
    message: 'Academic Semester created successfully!',
  })
})

const getAllSemesters: RequestHandler = asyncHandler(async (req, res) => {
  const paginationOptions = pick(req.query, [
    'page',
    'limit',
    'sortBy',
    'sortOrder',
  ])

  const filters = pick(req.query, ['searchTerm', 'title', 'code', 'year'])

  const allSemesters = await AcademicSemesterServices.getAllSemesters(
    filters,
    paginationOptions
  )

  sendResponse<AcademicSemesterType[]>(res, {
    data: allSemesters.data,
    meta: allSemesters.meta,
    message: 'Academic Semester retrieved successfully!',
  })
})

const getSemester: RequestHandler = asyncHandler(async (req, res) => {
  const { id } = req.params

  const semester = await AcademicSemesterServices.getSemester(id)

  sendResponse<AcademicSemesterType>(res, {
    data: semester,
    message: 'Academic Semester retrieved successfully!',
  })
})

const updateSemester = asyncHandler(async (req, res) => {
  const { id } = req.params

  const updatedSemester = await AcademicSemesterServices.updateSemester(
    id,
    req.body
  )

  sendResponse<AcademicSemesterType>(res, {
    data: updatedSemester,
    message: 'Academic Semester updated successfully!',
  })
})

export const AcademcSemisterController = {
  createSemester,
  getAllSemesters,
  getSemester,
  updateSemester,
}
