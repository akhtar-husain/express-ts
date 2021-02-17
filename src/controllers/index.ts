import { Request, Response } from 'express'
class IndexController {
    index(req: Request, res: Response) {
        return res.status(200).json({
            text: "This is a text from index controller's index method."
        })
    }
}

export default IndexController