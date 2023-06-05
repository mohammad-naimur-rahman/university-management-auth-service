import { Model } from 'mongoose'

export type academicSemesterTitleType = 'Autumn' | 'Summer' | 'Fall'
export type academicSemesterCodeType = '01' | '02' | '03'
export type academicSemesterMonthsType =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type AcademicSemesterType = {
  title: academicSemesterTitleType
  year: number
  code: academicSemesterCodeType
  startMonth: academicSemesterMonthsType
  endMonth: academicSemesterMonthsType
}

export type AcademicSemesterModel = Model<
  AcademicSemesterType,
  Record<string, unknown>
>
