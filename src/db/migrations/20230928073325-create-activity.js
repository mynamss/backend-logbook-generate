"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("activities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      user_id: {
        type: Sequelize.BIGINT,
      },
      log_id: {
        type: Sequelize.BIGINT,
      },
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      description: {
        type: Sequelize.ARRAY,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      created_by: {
        type: Sequelize.BIGINT,
      },
      updated_by: {
        type: Sequelize.BIGINT,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("activities")
  },
}
