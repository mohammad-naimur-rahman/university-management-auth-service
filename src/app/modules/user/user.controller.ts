import { RequestHandler } from 'express'
import asyncHandler from 'express-async-handler'
import { UserService } from './user.service'

const createUser: RequestHandler = asyncHandler(async (req, res) => {
  const createdUser = await UserService.createUserInDB(req.body.user)
  if (createdUser) {
    res.status(200).json({
      success: true,
      data: createdUser,
      message: 'User created successfully!',
    })
  } else {
    res.status(500).json({
      success: false,
      data: [],
      message: 'Something went wrong!',
    })
  }
})

export const UserController = {
  createUser,
}
