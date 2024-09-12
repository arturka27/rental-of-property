const { User, Property, Favorite } = require("../db/models");

class FavoritesService {
    static getAllLikes = async (userId) => {
        // console.log(userId);
        
        const userLikes = await User.findAll({
            where: { id: userId },
            include: [{
              model: Property,
            }],
            // attributes: [],
          });
          return userLikes? userLikes : null
    }

    static getOneLike = async (userId, propertyId) => {
        const like = await Favorite.findOne({ where: { userId, propertyId } })
        return like?  like.get() : null
    }

    static createLike = async (userId, propertyId)  => {
        const newLike = await Favorite.create({userId, propertyId})
        return newLike ? newLike.get() : null;
    }

    static deleteLike = async (userId, propertyId) => {
        const delLike = await Favorite.destroy({ where: { userId, propertyId } })
        return delLike ? delLike.get() : null;
    }
}

module.exports = FavoritesService;