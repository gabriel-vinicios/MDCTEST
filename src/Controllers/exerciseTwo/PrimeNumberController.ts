import { Request, Response } from 'express'

export class PrimeNumberController {
    async handle(request: Request, response: Response) {
        try {
            const { value } = request.body

            if (value === 1) return response.json({
                result: "1 is neither prime nor composite number."
            })

            const isPrime = (value: number) => {
                let isPrime = true
                for (let i = 2; i < value; i++) {
                    if (value % i == 0) {
                        isPrime = false;
                        break;
                    }
                }

                return isPrime
            }

            const answer = isPrime(value)

            return response.json({ answer: answer })

        } catch (error) {
            console.log(error)
            return response.status(500)
        }
    }
}