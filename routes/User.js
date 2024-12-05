import express from 'express'
import { getAllUsers, register, login } from '../controllers/User.js'

const router = express.Router()

router.route('/users').get(getAllUsers)
router.route('/register').post(register)
router.route('/login').post(login)

export default router
