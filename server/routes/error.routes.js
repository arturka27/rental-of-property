const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(404).json({ message: 'Not found 404ky' });
});

module.exports = router;