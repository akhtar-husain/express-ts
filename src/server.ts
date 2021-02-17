import logger from './utils/logger'
import path from 'path'
import dotenv from 'dotenv'
import app from './app'

dotenv.config({ path: path.resolve('./', '.env') })
logger.info(path.resolve('./', '.env'))

app.app.listen(process.env.PORT, () => {
    logger.info(`App listening on ${process.env.PORT}`)
})