const { Property } = require("../db/models");

class PropertyServices {
  static createProperty = async ({
    categoryId,
    userId,
    title,
    price,
    description,
    photo,
    address,
  } = {}) => {
    try {
      const property = await Property.create({
        categoryId,
        userId,
        title,
        price,
        description,
        photo,
        address,
      });
      console.log("Объявление создано");
      return property.get();
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getAllProperties = async (query) => {
    try {
      const properties = await Property.findAll({ where: query });
      return properties ? properties.map((property) => property.get()) : null;
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getPropertyById = async (id) => {
    try {
      const property = await Property.findByPk(id);
      return property ? property.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  };

  static updateProperty = async (data) => {
    const {
      id,
      userId,
      categoryId,
      title,
      price,
      description,
      photo,
      address,
    } = data;
    const property = await Property.findOne({ where: { id, userId } });
    if (property) {
      return property.update({
        categoryId,
        title,
        price,
        description,
        photo,
        address,
      });
    }
    return null;
  };

  static deleteProperty = async (id, userId) => {
    try {
      const property = await Property.destroy({ where: { id, userId } });
      return property;
    } catch ({ message }) {
      console.log(message);
    }
  };
}

module.exports = PropertyServices;
