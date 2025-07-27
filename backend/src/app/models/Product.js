import Sequelize, { Model } from 'sequelize'
import { v4 } from 'uuid'

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        price: Sequelize.FLOAT,
        path: Sequelize.STRING,
        offer: Sequelize.BOOLEAN,
        category_id: {
          type: Sequelize.UUID,
          references: { model: 'categories', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'products',
      }
    )

    this.addHook('beforeCreate', async (product) => {
      if (!product.id) product.id = v4()
    })

    return this
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' })
  }
}

export default Product