import { z } from 'zod'

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    academicSemester: z.object({
      title: z.enum(['Autumn', 'Summer', 'Fall'], {
        required_error:
          'Title is required and one of three expected, Autumn, Summer, Fall',
      }),
      year: z.number(),
      code: z.enum(['01', '02', '03']),
      startMonth: z.enum([
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
      ]),
      endMonth: z.enum([
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
      ]),
    }),
  }),
})

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
}
