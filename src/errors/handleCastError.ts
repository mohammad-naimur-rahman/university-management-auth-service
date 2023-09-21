import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'

type ICastError = {
  statusCode: number
  message: 'Cast Error'
  errorMessages: IGenericErrorMessage[]
}

const handleCastError = (error: mongoose.Error.CastError): ICastError => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid Id',
    },
  ]

  const statusCode = 400
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  }
}

export default handleCastError
