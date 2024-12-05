import jwt from 'jsonwebtoken'
export const authorization = async (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    res.status(400).json({ message: 'Token not present please validate' })
  }
  const decodedToken = token.split(' ')[1]
  if (!jwt.verify(decodedToken, process.env.JWT_SECRET)) {
    res.status(400).json({ message: 'Token not valid' })
  }
  next()
}
