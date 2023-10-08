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
    await queryInterface.bulkDelete('roles', null, {})
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          uuid: "6787d8f1-9b6c-48cc-b02d-18935814070d",
          role_name: "Admin",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: null,
          updated_by: null,          
        },
        {
          uuid: "b809e504-b59f-4284-a0ec-b480b6c8f2b9",
          role_name: "Mahasiswa",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: null,
          updated_by: null,          
        },
        {
          uuid: "ec944c22-e297-496e-9eb8-ed6a83bc583b",
          role_name: "Guest",
          created_at: new Date(),
          updated_at: new Date(),
          created_by: null,
          updated_by: null,          
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('roles', null, {});
  },
}
