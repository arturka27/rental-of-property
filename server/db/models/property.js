"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId"
      })

      this.belongsTo(models.Category, {
        foreignKey: "categoryId"
      })

      this.belongsToMany(models.User, {
        through: models.Favorite,
        foreignKey: "propertyId",
      })
    }
  }
  Property.init(
    {
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      photo: {
        allowNull: false,
        defaultValue: "http://placehold.it/120x100/",
        type: DataTypes.TEXT,
      },
      address: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};
