import { NextFunction, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { AnyZodObject } from 'zod'

export const validateRequest = (schema: AnyZodObject) =>
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers,
    })
    next()
  })
