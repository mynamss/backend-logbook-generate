"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("positions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true,
        autoIncrement: false,
      },
      dept_name: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      created_by: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      updated_by: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("positions")
  },
}
