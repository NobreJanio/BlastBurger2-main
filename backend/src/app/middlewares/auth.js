import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import authConfig from '../../config/auth.js'

export default async (request, response, next) => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  if (!token) {
    return response.status(401).json({ error: 'Token malformed' })
  }

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)
    request.userId = decoded.id
    request.userName = decoded.name
    return next()
  } catch (err) {
    console.error('Auth error:', err.message)
    return response.status(401).json({ error: 'Invalid token' })
  }
}