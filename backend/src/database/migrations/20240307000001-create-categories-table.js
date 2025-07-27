export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('categories', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category_id: {
      type: Sequelize.UUID,
      references: { model: 'categories', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  })
}

export const down = async (queryInterface) => {
  await queryInterface.dropTable('categories')
}