import express from 'express'
import indexRouter from './routes'

class Server {
    public app = express()
    public router = indexRouter

    constructor() {
        this.app.use('/', this.router)
    }
}

export default new Server()