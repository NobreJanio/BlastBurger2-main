export const up = async (queryInterface, Sequelize) => {
  await queryInterface.addColumn('products', 'offer', {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  })
}

export const down = async (queryInterface) => {
  await queryInterface.removeColumn('products', 'offer')
}