import { z } from 'zod'
import {
  academicSemesterCodeEnum,
  academicSemesterMonthsEnum,
  academicSemesterTitleEnum,
} from './academicSemester.utils'

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    academicSemester: z.object({
      title: z.enum([...academicSemesterTitleEnum] as [string, ...string[]], {
        required_error:
          'Title is required and one of three expected, Autumn, Summer, Fall',
      }),
      year: z.number(),
      code: z.enum([...academicSemesterCodeEnum] as [string, ...string[]]),
      startMonth: z.enum([...academicSemesterMonthsEnum] as [
        string,
        ...string[]
      ]),
      endMonth: z.enum([...academicSemesterMonthsEnum] as [
        string,
        ...string[]
      ]),
    }),
  }),
})

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
}
