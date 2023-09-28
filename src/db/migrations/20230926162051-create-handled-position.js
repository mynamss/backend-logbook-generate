"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("handled_positions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      position_id: {
        type: Sequelize.BIGINT,
      },
      mentor_id: {
        type: Sequelize.BIGINT,
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
    await queryInterface.dropTable("handled_positions")
  },
}
