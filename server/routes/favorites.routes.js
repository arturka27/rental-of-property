const favoritesRouter = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const FavoritesService = require("../services/Favorites.servises");

favoritesRouter.get("/:userId", async (req, res) => {
  try {
    //const userId = res.locals.user.id;
     const  {userId} = req.params;
    const likes = await FavoritesService.getAllLikes(userId);
    res.status(200).json({ message: "success", likes });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

favoritesRouter.post("/", verifyAccessToken, async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const {propertyId} = req.body;

    const check = await FavoritesService.getOneLike(userId, propertyId)
    if (check) {
        return res.status(400).json({ message: "is already favorite" });
    }

    const newLike = await FavoritesService.createLike(userId, propertyId) 
    if (newLike) {
      res.status(200).json({ message: "success", likeState: true });
    }else {
        res.status(400).json({ message: "fail" });
      }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

favoritesRouter.delete('/:propertyId', verifyAccessToken, async(req, res) => {
    try {
        const {propertyId} = req.params;
        const userId = res.locals.user.id;
        
        const check = await FavoritesService.getOneLike(userId, propertyId)
        if (check) {
            const delLike = await FavoritesService.deleteLike(+propertyId, userId) 
            if (delLike > 0) {
                res.status(200).json({ message: "success", likeState: false })
                return 
              } else {
                res.status(400).json({ message: "fail" });
              }
        }
        res.status(400).json({ message: "like is not found" });
 


    } catch ({ message }) {
        res.status(500).json({ error: message });
      }
})

module.exports = favoritesRouter;
