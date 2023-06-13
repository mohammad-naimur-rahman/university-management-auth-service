import { Model, Types } from 'mongoose'

export type UserType = {
  id: string
  role: string
  password: string
  student?: Types.ObjectId
  faculty?: Types.ObjectId
  admin?: Types.ObjectId
}

export type UserModel = Model<UserType, Record<string, unknown>>
