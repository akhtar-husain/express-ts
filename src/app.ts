import express, {Request, Response, NextFunction} from 'express'
import indexRouter from './routes'
import apiRouter from './routes/api'
import ErrorHandler from './utils/errorHandler'

class Server {
    public app = express()
    private router = indexRouter
    private apiRouter = apiRouter

    constructor() {
        this.app.use('/', this.router)
        this.app.use('/api', this.apiRouter)

        // Error handling middleware
        this.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
            return res.status(err.statusCode).json({
                status: false,
                statusCode: err.statusCode,
                message: err.message
            })
        })
    }
}

export default new Server()