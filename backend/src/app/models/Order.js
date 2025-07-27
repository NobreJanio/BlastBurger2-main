import Sequelize, { Model } from 'sequelize'
import { v4 } from 'uuid'

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.UUID,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
        product_id: {
          type: Sequelize.UUID,
          references: { model: 'products', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
        status: {
          type: Sequelize.ENUM,
          values: ['pending', 'preparing', 'ready', 'delivered', 'cancelled'],
          defaultValue: 'pending',
        },
        quantity: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
      },
      {
        sequelize,
      }
    )

    this.addHook('beforeCreate', async (order) => {
      if (!order.id) order.id = v4()
    })

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' })
  }
}

export default Order