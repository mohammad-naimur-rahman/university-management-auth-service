import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errLogger, logger } from './shared/logger'
;(async () => {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢 Database is connected successfully`)

    app.listen(config.port, () =>
      logger.info(`Application  listening on port ${config.port}`)
    )
  } catch (err) {
    errLogger.error('Failed to connect database', err)
  }
})()
