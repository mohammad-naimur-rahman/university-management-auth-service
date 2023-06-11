import { Schema, model } from 'mongoose'
import { UserModel, UserType } from './user.interface'

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
    toJSON: {
      virtuals: true,
    },
  }
)

const User = model<UserType, UserModel>('User', userSchema)

export default User
