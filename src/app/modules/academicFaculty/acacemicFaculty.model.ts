import { Schema, model } from 'mongoose'
import {
  AcademicFacultyModel,
  AcademicFacultyType,
} from './acacemicFaculty.interface'

const academicFacultySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

const AcademicFaculty = model<AcademicFacultyType, AcademicFacultyModel>(
  'AcademicFaculty',
  academicFacultySchema
)

export default AcademicFaculty
