import jwt from 'jsonwebtoken'
export const authorization = async (req, res, next) => {
  const token = req.headers.authorization
  const decodedToken = token.split(' ')[1]
  if (!decodedToken) {
    throw new Error('Token not present please validate')
  }
  if (!jwt.verify(decodedToken, process.env.JWT_SECRET)) {
    res.status(401).json({ message: 'Token not valid' })
  }
  next()
}
