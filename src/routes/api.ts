import { Router } from 'express'
import APIController from '../controllers/api'
import IndexMiddleWare from '../middlewares'

class APIRouter {
    public router = Router()
    private controller = new APIController()
    private middleware = new IndexMiddleWare()

    constructor() {
        this.router.get('/', this.controller.index)
        this.router.get('/welcome', this.middleware.index, this.controller.welcome)
    }
}

export = new APIRouter().router