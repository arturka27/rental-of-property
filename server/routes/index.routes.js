const router = require("express").Router();
const errorRouter = require('./error.routes');
const tokensRouter = require('./tokens.routes');
const authRouter = require('./auth.routes');
// const propertiesRouter = require('./properties.routes');
// const categoriesRouter = require('./categories.routes');
// const favoritesRouter = require('./favorites.routes');

router.use('/tokens', tokensRouter);
router.use('/auth', authRouter);
// router.use('/properties', propertiesRouter);
// router.use('/categories', categoriesRouter)
// router.use('/favorites', favoritesRouter)



// должна быть в конце
router.use('*', errorRouter);

module.exports = router;