export const up = async (queryInterface, Sequelize) => {
  await queryInterface.addColumn('categories', 'path', {
    type: Sequelize.STRING,
  });
}

export const down = async (queryInterface) => {
  await queryInterface.removeColumn('categories', 'path');
}
  