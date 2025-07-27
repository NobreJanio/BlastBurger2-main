import { v4 } from 'uuid'
import * as Yup from 'yup'
import bcrypt from 'bcryptjs'

import User from '../models/User.js'

class UserController {
    async store(request, response) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            admin: Yup.boolean()
        })

        try {
            schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        const { name, email, password, admin } = request.body

        const userExists = await User.findOne({ where: { email } })

        if (userExists) {
            return response.status(409).json({ error: "Usuário já existe" })
        }

        const password_hash = await bcrypt.hash(password, 10)

        const user = await User.create({
            id: v4(),
            name,
            email,
            password_hash,
            admin,
        })

        return response.status(201).json({
            id: user.id,
            name,
            email,
            admin,
        })
    }

    async index(request, response) {
        try {
            const users = await User.findAll()
            return response.json(users)
        } catch (err) {
            console.error(err)
            return response.status(500).json({ error: 'Internal server error' })
        }
    }
}

export default new UserController()