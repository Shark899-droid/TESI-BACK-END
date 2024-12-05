import User from '../models/User.js'
import jwt from 'jsonwebtoken'
export const getAllUsers = async (req, res) => {
  try {
    const data = await User.find({})
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      res.status(400).json({ message: 'Fill all the fields !!!' })
    }
    const data = await User.create({ name, email, password })
    res.status(202).json({ data })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}
export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({ message: 'Fill all the fields !!!' })
    }

    const user = await User.findOne({ email })
    if (!user) {
      res.status(400).json({ message: 'No user found with this email !!!' })
    }
    if (!user.comparePassword(password)) {
      res.status(400).json({ message: 'Wrong password retry!!!' })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.status(202).json({ email, token, id: user._id })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}
