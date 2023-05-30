import { Model, Schema, model } from 'mongoose'
import { UserType } from './users.interface'

type UserModel = Model<UserType, object>

const userSchema = new Schema<UserType>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const User = model<UserType, UserModel>('User', userSchema)

export default User
