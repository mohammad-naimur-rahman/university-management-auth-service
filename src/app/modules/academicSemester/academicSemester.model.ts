import { Schema, model } from 'mongoose'
import {
  AcademicSemesterModel,
  AcademicSemesterType,
} from './academicSemester.interface'
import {
  academicSemesterCodeEnum,
  academicSemesterMonthsEnum,
  academicSemesterTitleEnum,
} from './academicSemester.utils'

const userSchema = new Schema<AcademicSemesterType>(
  {
    title: {
      type: String,
      required: true,
      emum: academicSemesterTitleEnum,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodeEnum,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonthsEnum,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonthsEnum,
    },
  },
  {
    timestamps: true,
  }
)

const AcademicSemester = model<AcademicSemesterType, AcademicSemesterModel>(
  'AcademicSemester',
  userSchema
)

export default AcademicSemester
