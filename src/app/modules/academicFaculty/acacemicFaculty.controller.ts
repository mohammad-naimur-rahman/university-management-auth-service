import { RequestHandler } from 'express'
import asyncHandler from 'express-async-handler'
import sendResponse from '../../../shared/sendResponse'
import { AcademicFacultyServices } from './acacemicFaculty.service'
const getAllFaculties: RequestHandler = asyncHandler(async (req, res) => {
  const faculties = await AcademicFacultyServices.getFaculties()
  sendResponse(res, {
    message: 'Successfully retrieved all faculties',
    data: faculties,
  })
})

const getFaculty: RequestHandler = asyncHandler(async (req, res) => {
  const { id } = req.params
  const faculty = await AcademicFacultyServices.getFacultyById(id)
  sendResponse(res, {
    message: 'Successfully retrieved faculty',
    data: faculty,
  })
})

const createFaculty: RequestHandler = asyncHandler(async (req, res) => {
  const { body } = req
  const createdFaculty = await AcademicFacultyServices.createFaculty(body)
  sendResponse(res, {
    message: 'Faculty created successfully!',
    data: createdFaculty,
  })
})

const updateFaculty: RequestHandler = asyncHandler(async (req, res) => {
  const {
    body,
    params: { id },
  } = req
  const updatedFaculty = await AcademicFacultyServices.updateFaculty(id, body)
  sendResponse(res, {
    message: 'Faculty updated successfully!',
    data: updatedFaculty,
  })
})

const deleteFaculty: RequestHandler = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req
  await AcademicFacultyServices.deleteFaculty(id)
  sendResponse(res, {
    message: 'Faculty deleted successfully!',
    data: id,
  })
})

export const AcademicFacultyControllers = {
  getAllFaculties,
  getFaculty,
  createFaculty,
  updateFaculty,
  deleteFaculty,
}
