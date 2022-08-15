import express from 'express'
const router = express.Router()

import { welcomeHandler } from '../controllers/welcomeController.js'

router.route('/').get(welcomeHandler)

export default router
