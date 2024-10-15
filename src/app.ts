import express, { Request, Response, NextFunction } from 'express'
import indexRouter from './routes'
import apiRouter from './routes/api'
import ErrorHandler from './utils/errorHandler'

class Server {
    public app = express()
    private router = indexRouter
    private apiRouter = apiRouter

    constructor() {
        this.appInit()
    }

    appInit() {
        this.app.use('/', this.router)
        this.app.use('/api', this.apiRouter)

        this.app.disable('x-powered-by');
        // this.app.use(new ResponseHandler)

        // Server Error Handler
        this.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
            res.status(err.statusCode).send({
                status: false,
                statusCode: err.statusCode,
                message: err.message
            });
            return;
        })

        // 404 Error
        this.app.use((req: Request, res: Response) => {
            res.status(404).send({
                status: false,
                statusCode: 404,
                message: "Not Found!"
            });
            return;
        })
    }
}

export default new Server()