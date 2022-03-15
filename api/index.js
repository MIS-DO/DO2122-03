var router = require('express').Router();

router.use('/v0', require('./v0/routes'))
router.use('/v1', require('./v1/routes'))

module.exports = router;