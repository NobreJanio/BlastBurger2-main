import Sequelize, { Model } from 'sequelize'
import { v4 } from 'uuid'
import bcrypt from 'bcryptjs'

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    )

    this.addHook('beforeCreate', async (user) => {
      if (!user.id) user.id = v4()
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8)
      }
    })

    return this
  }
}