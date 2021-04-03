import { Request, Response, NextFunction } from 'express'

class ResponseHandler {
    constructor(err: Error, req: Request, res: Response, next: NextFunction) {
        ResponseHandler.res = res
        ResponseHandler.req = req
        ResponseHandler.next = next
    }
    static req: Request
    static res: Response
    static next: NextFunction
    static send({
        status = true,
        statusCode = 200,
        data = {},
        message = "Success"
    }) {
        return this.res.status(statusCode).json({
            status,
            message,
            data
        })
    }
}

export default ResponseHandler