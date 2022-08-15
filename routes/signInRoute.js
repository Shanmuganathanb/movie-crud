import express from 'express'
const router = express.Router()

import { signinHandler } from '../middlewares/authMiddleware.js'

router.route('/').post(signinHandler)

export default router
