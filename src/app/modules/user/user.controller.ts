import { RequestHandler } from 'express'
import asyncHandler from 'express-async-handler'
import sendResponse from '../../../shared/sendResponse'
import { UserType } from './user.interface'
import { UserService } from './user.service'

const createUser: RequestHandler = asyncHandler(async (req, res) => {
  const createdUser = await UserService.createUserInDB(req.body)
  sendResponse<UserType>(res, {
    data: createdUser,
    message: 'User created successfully',
  })
})

export const UserController = {
  createUser,
}
