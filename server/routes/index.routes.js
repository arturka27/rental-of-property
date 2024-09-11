const router = require("express").Router();
const tokensRouter = require("./tokens.routes");
const categoriesRouter = require("./categories.routes");
const errorRouter = require("./error.routes");
const authRouter = require("./auth.routes");
const propertiesRouter = require("./properties.routes");
// const favoritesRouter = require("./favorites.routes");

router.use("/tokens", tokensRouter);
router.use("/properties", propertiesRouter);
router.use("/categories", categoriesRouter);
// router.use("/favorites", favoritesRouter);
router.use("/auth", authRouter);

// должна быть в конце
router.use("*", errorRouter);

module.exports = router;
