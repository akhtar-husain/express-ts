import { Router } from 'express'
import IndexController from '../controllers'
import IndexMiddleWare from '../middlewares'

class IndexRouter {
    public router = Router()
    private controller = new IndexController()
    private middleware = new IndexMiddleWare()

    constructor() {
        this.router.get('/', this.middleware.index, this.controller.index)
    }
}

export = new IndexRouter().router