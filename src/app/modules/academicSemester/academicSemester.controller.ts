import { RequestHandler } from 'express'
import asyncHandler from 'express-async-handler'
import { pick } from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { AcademicSemesterType } from './academicSemester.interface'
import { AcademicSemesterServices } from './academicSemester.service'

const createSemester: RequestHandler = asyncHandler(async (req, res) => {
  const createdUser = await AcademicSemesterServices.createSemesterInDB(
    req.body.academicSemester
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

  const filters = pick(req.query, ['searchTerm'])

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

export const AcademcSemisterController = {
  createSemester,
  getAllSemesters,
}
