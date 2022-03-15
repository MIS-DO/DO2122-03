var router = require('express').Router();

router.use('',  require('./dashboardRoutes'), require('./tripRoutes'), require('./actorRoutes'), require('./applicationRoutes'), require('./customisationRoutes'))

module.exports = router;