import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errLogger, logger } from './shared/logger'

process.on('uncaughtException', err => {
  errLogger.error(`Uncaught exception detected ~ ${err}`)
  process.exit(1)
})

let server: Server

const bootstrap = async () => {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢 Database is connected successfully`)

    server = app.listen(config.port, () =>
      logger.info(`Application  listening on port ${config.port}`)
    )
  } catch (err) {
    errLogger.error('Failed to connect database', err)
  }

  process.on('unhandledRejection', err => {
    if (server) {
      server.close(() => {
        errLogger.error(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', err => {
  logger.info(`SIGTERM detected ~ ${err}`)
  if (server) {
    server.close()
  }
})
