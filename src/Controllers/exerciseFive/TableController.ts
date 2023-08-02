import { Request, Response } from "express"

export class TableController {
    async handle(request: Request, response: Response) {
        try {
            const { value } = request.body

            const table = {
                "byOne": value,
                "byTwo": value * 2,
                "byThree": value * 3,
                "byFour": value * 4,
                "byFive": value * 5,
                "bySix": value * 6,
                "bySeven": value * 7,
                "byEight": value * 8,
                "byNine": value * 9,
                "byThen": value * 10
            }

            return response.json(table)
        } catch (error) {
            console.log(error)
            return response.status(500)
        }

    }
} 