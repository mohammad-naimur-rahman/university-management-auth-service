import config from '../../../config'
import ApiError from '../../../errorHandlers/ApiError'
import { UserType } from './user.interface'
import User from './user.model'
import { generateUserId } from './user.utils'

const createUserInDB = async (user: UserType): Promise<UserType | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id

  // default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user!')
  }
  return createdUser
}

export const UserService = {
  createUserInDB,
}
