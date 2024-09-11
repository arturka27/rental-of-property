'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        }, 
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }, 
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      photo: {
        allowNull: false,
        defaultValue: "http://placehold.it/120x100/",
        type: Sequelize.TEXT
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Properties');
  }
};