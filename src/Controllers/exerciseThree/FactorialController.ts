import { Request, Response } from 'express'

export class FactorialController {
    async handle(request: Request, response: Response) {
        try {
            const { value } = request.body

            const factorial = (value: number) => (value < 2) ? 1 :
                factorial(value - 1) * value

            const result = factorial(value)

            return response.json({ result: result })
        } catch (error) {

        }
    }
}