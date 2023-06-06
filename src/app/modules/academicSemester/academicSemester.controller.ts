import { RequestHandler } from 'express'
import asyncHandler from 'express-async-handler'
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

export const AcademcSemisterController = {
  createSemester,
}
