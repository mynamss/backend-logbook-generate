"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("outputs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: "users",
          key: "uuid",
        },
      },
      log_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: "logs",
          key: "uuid",
        },
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true,
        autoIncrement: false,
      },
      description: {
        type: Sequelize.ARRAY(Sequelize.STRING),
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
    await queryInterface.dropTable("outputs")
  },
}
