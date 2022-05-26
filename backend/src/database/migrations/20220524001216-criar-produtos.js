'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      pro_descricao: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      pro_vlrcusto: {
        type: Sequelize.FLOAT(10, 1),
        allowNull: false,
      },
      pro_vlrvenda: {
        type: Sequelize.FLOAT(10, 1),
        allowNull: false,
      },
      pro_ativoinativo: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('produtos')
  }
};

