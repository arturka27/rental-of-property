"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Arthur",
          email: "arthur@mail.ru",
          password: await bcrypt.hash("123", 10),
          isAdmin: true,
        },
        {
          name: "Vladimir",
          email: "vova@mail.ru",
          password: await bcrypt.hash("123", 10),
          isAdmin: false,
        },
        {
          name: "Arsen",
          email: "arsen@mail.ru",
          password: await bcrypt.hash("123", 10),
          isAdmin: false,
        },
        {
          name: "Polina",
          email: "polly@mail.ru",
          password: await bcrypt.hash("123", 10),
          isAdmin: false,
        },  
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
