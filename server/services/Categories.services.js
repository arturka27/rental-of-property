const { where, Model } = require("sequelize");
const { Category } = require("../db/models");

class CategoryService {
  static getAllCategory = async () => await Category.findAll();

  static getOneCategory = async (id) => {
    const categ = await Category.findByPk(id)
    return categ ? categ.get() : null
  }
}

module.exports = CategoryService;
