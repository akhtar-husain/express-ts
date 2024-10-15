import { Request, Response } from 'express'
class IndexController {
    index(req: Request, res: Response) {
        res.status(200).json({
            text: "This is a text from index controller's index method."
        });
        return;
    }
}

export default IndexController