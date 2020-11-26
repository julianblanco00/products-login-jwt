import { Router } from 'express'
const router = Router()

import * as authController from '../controllers/auth/auth'
import { checkIfRoleExists, isDuplicated } from '../middlewares/verifySignUp'

router.post('/signin', authController.signIn)

router.post('/signup', [ isDuplicated, checkIfRoleExists ], authController.signUp)

export default router