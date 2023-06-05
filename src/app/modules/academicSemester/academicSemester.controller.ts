import { RequestHandler } from 'express'
import asyncHandler from 'express-async-handler'
import { AcademicSemesterServices } from './academicSemester.service'

const createSemester: RequestHandler = asyncHandler(async (req, res) => {
  const createdUser = await AcademicSemesterServices.createSemesterInDB(
    req.body.academicSemester
  )
  if (createdUser) {
    res.status(200).json({
      success: true,
      data: createdUser,
      message: 'Academic Semester created successfully!',
    })
  } else {
    res.status(500).json({
      success: false,
      data: [],
      message: 'Something went wrong!',
    })
  }
})

export const AcademcSemisterController = {
  createSemester,
}
