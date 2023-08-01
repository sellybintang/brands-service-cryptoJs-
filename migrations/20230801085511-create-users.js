'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaAwal: {
        type: Sequelize.STRING
      },
      namaAkhir: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      poto: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING
      },
      kataSandi: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};