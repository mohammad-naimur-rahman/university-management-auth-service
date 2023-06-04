import { Model } from 'mongoose'

export type UserType = {
  id: string
  role: string
  password: string
}

export type UserModel = Model<UserType, Record<string, unknown>>
