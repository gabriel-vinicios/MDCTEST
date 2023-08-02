import { Request, Response } from "express";


export class gradeAverageController {
    async handle(request: Request, response: Response) {
        try {
            const { mathematics, geography, science } = request.body

            const result = (mathematics + geography + science) / 3

            return response.json({ result: result })

        } catch (error) {
            console.log(error)
            return response.status(500)
        }
    }
}