"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Favorites",
      [
        {
          userId: 2,
          propertyId: 1,
        },
        {
          userId: 2,
          propertyId: 3,
        },
        {
          userId: 3,
          propertyId: 2,
        },
        {
          userId: 4,
          propertyId: 1,
        },
        {
          userId: 4,
          propertyId: 2,
        },
        {
          userId: 3,
          propertyId: 1,
        },
        {
          userId: 4,
          propertyId: 4,
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Favorites", null, {});
  },
};
