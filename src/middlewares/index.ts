import { Request, Response, NextFunction } from 'express'

class IndexMiddleWare {
    public index(req:Request, res: Response, next: NextFunction) {
        // Write middleware logic here
        next()
    }
}

export default IndexMiddleWare