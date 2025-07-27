import Sequelize, { Model } from 'sequelize'
import { v4 } from 'uuid'

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        path: Sequelize.STRING,
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
      }
    )

    this.addHook('beforeCreate', async (category) => {
      if (!category.id) category.id = v4()
    })

    return this
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'parent' })
    this.hasMany(models.Category, { foreignKey: 'category_id', as: 'subcategories' })
  }
}

export default Category