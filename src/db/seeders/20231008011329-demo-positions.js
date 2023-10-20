"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkDelete("positions", null, {})
    await queryInterface.bulkInsert("positions", [
      {
        uuid: "69d62529-4939-45e5-8680-d6c82b33749a",
        dept_name: "Back End, API, dan Database Developer",
        created_at: new Date(),
        updated_at: new Date(),
        created_by: null,
        updated_by: null,
      },
      {
        uuid: "ef40885f-6531-4db7-8c02-1135a2efbb2b",
        dept_name: "Web Front End Developer",
        created_at: new Date(),
        updated_at: new Date(),
        created_by: null,
        updated_by: null,
      },
      {
        uuid: "697802db-340c-4c70-852c-dbe51739ec41",
        dept_name: "UI/UX Designer",
        created_at: new Date(),
        updated_at: new Date(),
        created_by: null,
        updated_by: null,
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("positions", null, {})
  },
}
