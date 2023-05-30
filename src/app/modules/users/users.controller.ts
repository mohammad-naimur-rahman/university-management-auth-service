import { Request, Response } from 'express'
import { createUserInDB } from './users.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const createdUser = await createUserInDB(req.body.user)
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
    res.status(400).json({
      success: false,
      data: [],
      message: (err as { message: string }).message,
    })
  }
}
