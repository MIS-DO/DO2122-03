var router = require('express').Router();

router.use('', require('./tripRoutes'))
router.use('', require('./applicationRoutes'))
router.use('', require('./adminRoutes'))

module.exports = router;