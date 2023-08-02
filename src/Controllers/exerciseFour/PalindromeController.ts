import { Request, Response } from 'express'

export class PalindromeController {
    async handle(request: Request, response: Response) {
        try {
            const { text } = request.body

            const isPalindrome = (str: string) => str === str.split('').reverse().join('').toLowerCase();
            const answer = isPalindrome(text)

            return response.json({ answer: answer })
        } catch (error) {
            console.log(error)
            return response.status(500)
        }
    }
}