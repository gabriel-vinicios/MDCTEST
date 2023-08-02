import { Request, Response } from "express";

export class InterestCalculationController {
    async handle(request: Request, response: Response) {
        const { initialCapital, interestRate, investmentTime } = request.body

        const calculateInterest = (
            total: number,
            months: number,
            rate: number) => {
            const interest = rate / 100 + 1
            const year = months / 12

            return (total * Math.pow(interest, year)).toFixed(4)
        }

        const result = calculateInterest(
            initialCapital,
            investmentTime,
            interestRate)

        return response.json({ result: result })
    }
}