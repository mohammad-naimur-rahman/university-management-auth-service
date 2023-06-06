import {
  AcademicSemesterTitleCodeMapperType,
  academicSemesterCodeType,
  academicSemesterMonthsType,
  academicSemesterTitleType,
} from './academicSemester.interface'

export const academicSemesterTitleEnum: Array<academicSemesterTitleType> = [
  'Autumn',
  'Summer',
  'Fall',
]
export const academicSemesterCodeEnum: Array<academicSemesterCodeType> = [
  '01',
  '02',
  '03',
]
export const academicSemesterMonthsEnum: Array<academicSemesterMonthsType> = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const academicSemesterTitleCodeMapper: AcademicSemesterTitleCodeMapperType =
  {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  }
