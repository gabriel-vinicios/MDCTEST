import { Request, Response } from 'express'

export class CalculatorController {
    async handle(request: Request, response: Response) {
        try {
            const { firstValue, secondValue } = request.body
            const { operator } = request.query
            let result: number | String = 0

            switch (operator) {
                case "addition":
                    result = firstValue + secondValue
                    break;

                case "subtraction":
                    result = firstValue - secondValue
                    break;

                case "division":
                    result = firstValue / secondValue
                    break;

                case "multiplication":
                    result = firstValue * secondValue
                    break;

                default:
                    result = "this operator doesn't exist."
                    break;
            }

            return response.json({ result: result })

        } catch (error) {
            console.log(error)
            return response.status(500)
        }
    }
}