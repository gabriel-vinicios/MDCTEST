import { Router } from 'express'
import { CalculatorController } from './Controllers/exerciseOne/CalculatorController'
import { PrimeNumberController } from './Controllers/exerciseTwo/PrimeNumberController'
import { FactorialController } from './Controllers/exerciseThree/FactorialController'
import { PalindromeController } from './Controllers/exerciseFour/PalindromeController'
import { TableController } from './Controllers/exerciseFive/TableController'
import { VowelCounterController } from './Controllers/exerciseSix/VowelCounterController'
import { gradeAverageController } from './Controllers/exerciseSeven/gradeAverageController'
import { InterestCalculationController } from './Controllers/exerciseEight/InterestCalculationController'

const router = Router()

const exerciseOneController = new CalculatorController()
const exerciseTwoController = new PrimeNumberController()
const exerciseThreeController = new FactorialController()
const exerciseFourController = new PalindromeController()
const exerciseFiveController = new TableController()
const exerciseSixController = new VowelCounterController()
const exerciseSevenController = new gradeAverageController()
const exerciseEightController = new InterestCalculationController()

router.post("/exerciseOne", exerciseOneController.handle)
router.post("/exerciseTwo", exerciseTwoController.handle)
router.post("/exerciseThree", exerciseThreeController.handle)
router.post("/exerciseFour", exerciseFourController.handle)
router.post("/exerciseFive", exerciseFiveController.handle)
router.post("/exerciseSix", exerciseSixController.handle)
router.post("/exerciseSeven", exerciseSevenController.handle)
router.post("/exerciseEight", exerciseEightController.handle)

export { router }