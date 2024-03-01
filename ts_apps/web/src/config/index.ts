import dotenv from 'dotenv'
import path from 'path'

import { getRootPath } from '../utils/fs'

function initEnv(): void {
  let cfgPath = path.join(getRootPath(), '.env')
  console.log('init config from:', cfgPath)
  dotenv.config({ path: cfgPath })
  // console.debug('run context:', JSON.stringify(process.env))
}

initEnv()

export const env = process.env.ENV ?? 'dev'

export const port = process.env.PORT ?? 8081
