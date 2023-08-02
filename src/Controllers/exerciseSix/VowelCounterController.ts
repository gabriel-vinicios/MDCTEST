import { Request, Response } from "express";

export class VowelCounterController {
    async handle(request: Request, response: Response) {
        try {
            const { text } = request.body

            const getVowels = (str: string) => {
                const match = str.match(/[aeiou]/gi);
                return match === null ? 0 : match.length
            }

            const result = getVowels(text)

            return response.json({ result: result })
        } catch (error) {
            console.log(error)
            return response.status(500)
        }
    }
}