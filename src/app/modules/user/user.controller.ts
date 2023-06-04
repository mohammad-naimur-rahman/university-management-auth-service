import { RequestHandler } from 'express'
import { UserService } from './user.service'

const createUser: RequestHandler = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createUser,
}
