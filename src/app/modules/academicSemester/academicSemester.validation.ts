import { z } from 'zod'
import {
  academicSemesterCodeEnum,
  academicSemesterMonthsEnum,
  academicSemesterTitleEnum,
} from './academicSemester.utils'

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitleEnum] as [string, ...string[]], {
      required_error:
        'Title is required and one of three expected, Autumn, Summer, Fall',
    }),
    year: z.string(),
    code: z.enum([...academicSemesterCodeEnum] as [string, ...string[]]),
    startMonth: z.enum([...academicSemesterMonthsEnum] as [
      string,
      ...string[]
    ]),
    endMonth: z.enum([...academicSemesterMonthsEnum] as [string, ...string[]]),
  }),
})

const updateAcademicSemesterZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemesterTitleEnum] as [string, ...string[]], {
          required_error:
            'Title is required and one of three expected, Autumn, Summer, Fall',
        })
        .optional(),
      year: z.string().optional(),
      code: z
        .enum([...academicSemesterCodeEnum] as [string, ...string[]])
        .optional(),
      startMonth: z
        .enum([...academicSemesterMonthsEnum] as [string, ...string[]])
        .optional(),
      endMonth: z
        .enum([...academicSemesterMonthsEnum] as [string, ...string[]])
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Title and code required together, or not needed',
    }
  )

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
}
