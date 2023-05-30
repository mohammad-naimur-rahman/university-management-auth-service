import User from './users.model'
import { UserType } from './users.interface'
import config from '../../../config'
import { generateUserId } from './users.utils'

export const createUserInDB = async (
  user: UserType
): Promise<UserType | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id

  // default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}
