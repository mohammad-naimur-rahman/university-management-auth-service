import httpStatus from 'http-status'
import { Schema, model } from 'mongoose'
import ApiError from '../../../errorHandlers/ApiError'
import {
  AcademicSemesterModel,
  AcademicSemesterType,
} from './academicSemester.interface'
import {
  academicSemesterCodeEnum,
  academicSemesterMonthsEnum,
  academicSemesterTitleEnum,
} from './academicSemester.utils'

const academicSemesterSchema = new Schema<AcademicSemesterType>(
  {
    title: {
      type: String,
      required: true,
      emum: academicSemesterTitleEnum,
    },
    year: {
      type: String,
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
    toJSON: {
      virtuals: true,
    },
  }
)

academicSemesterSchema.pre('save', async function (next) {
  const doesExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (doesExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Acamedic semester already exists!')
  }
  next()
})

const AcademicSemester = model<AcademicSemesterType, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)

export default AcademicSemester
