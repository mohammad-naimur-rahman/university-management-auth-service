import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import config from '../config'
import ApiError from '../errorHandlers/ApiError'
import handleValidationError from '../errorHandlers/handleValidationError'
import { GlobalErrType } from '../types/common'
import { GenericErrMsgType } from '../types/errMsg.type'

const globalErrorHandler = (
  err: mongoose.Error.ValidationError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'Something went wrong!'
  let errorMessages: GenericErrMsgType[] = []

  if (err.name === 'ValidationError') {
    statusCode = 400
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof Error) {
    message = err?.message
    errorMessages = err?.message ? [{ path: '', message }] : []
  } else if ((err as object) instanceof ApiError) {
    statusCode = (err as GlobalErrType).statusCode
    message = (err as GlobalErrType).message
    errorMessages = (err as GlobalErrType).message
      ? [{ path: '', message }]
      : []
  }

  res.status(statusCode).json({
    statusCode,
    message,
    errorMessages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })

  next()
}

export default globalErrorHandler
