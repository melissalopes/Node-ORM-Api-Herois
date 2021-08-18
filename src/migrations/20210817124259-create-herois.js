'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Herois', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      poder: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fraqueza: {
        allowNull: false,
        type: Sequelize.STRING
      },
      identidadeSecreta: {
        allowNull: false,
        type: Sequelize.STRING
      },
      grupo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Grupos', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Herois');
  }
};