import { Request, Response } from 'express'
import ErrorHandler from '../utils/errorHandler'
class APIController {
    index(req: Request, res: Response) {
        throw new ErrorHandler(501, "Not implemented!")
    }
    welcome(req: Request, res: Response) {
        return res.status(200).json({
            text: "API controller's index method."
        })
    }
}

export default APIController