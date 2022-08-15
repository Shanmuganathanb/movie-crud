import express from 'express'
const router = express.Router()
import {
    addMovie,
    allMovie,
    updateMovie,
    deleteMovie,
} from '../controllers/movieController.js'
import { authHandler } from '../middlewares/authMiddleware.js'

router.route('/add').post(addMovie)
router.route('/all').get(allMovie)
router.route('/:id/update').put(authHandler, updateMovie)
router.route('/:id/delete').delete(authHandler, deleteMovie)

export default router
