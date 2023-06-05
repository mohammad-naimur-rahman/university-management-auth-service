import { Model } from 'mongoose'

type MonthType =
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
  title: 'Autumn' | 'Summer' | 'Fall'
  year: number
  code: '01' | '02' | '02'
  startMonth: MonthType
  endMonth: MonthType
}

export type AcademicSemesterModel = Model<
  AcademicSemesterType,
  Record<string, unknown>
>
