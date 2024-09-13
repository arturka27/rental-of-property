"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {

    }
  }
  Favorite.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }, 
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
      },
      propertyId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Properties',
          key: 'id'
        }, 
        onDelete: 'CASCADE',
        onUpdate: "CASCADE",
      }
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
