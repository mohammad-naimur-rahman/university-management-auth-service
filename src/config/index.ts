import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

type configType = {
  database_url: string | undefined
  port: string | undefined
  default_user_password: string | undefined
}

const config: configType = {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
}

export default config
