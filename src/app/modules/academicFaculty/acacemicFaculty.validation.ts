import { z } from 'zod'

const commonZSchema = z.object({
  body: z.object({
    title: z.string(),
  }),
})

const createFacultyZodSchema = commonZSchema

const updateFacultyZodSchema = commonZSchema

export const AcademicFacultyValidation = {
  createFacultyZodSchema,
  updateFacultyZodSchema,
}
