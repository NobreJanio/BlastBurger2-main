import jwt from 'jsonwebtoken'
import * as Yup from 'yup'
import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import authConfig from '../../config/auth.js'

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    })

    try {
      schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { email, password } = request.body

    const user = await User.findOne({
      where: { email },
    })

    if (!user) {
      return response.status(401).json({ error: 'Usuário não encontrado' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash)
    if (!passwordMatch) {
      return response.status(401).json({ error: 'Senha incorreta' })
    }

    const { id, name, admin } = user

    return response.json({
      user: {
        id,
        name,
        email,
        admin,
      },
      token: jwt.sign({ id, name, admin }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()