'use strict'

var router = require('express').Router();

const dashboard = require('../controllers/dashboardController')

/**
   * Get / Updates dashboard
   * 
   * @section dashboard
   * @type get put
   * @url /v0/dashboard
  */
router.route('/dashboard')
  .get(dashboard.get_dashboard)
  .put(dashboard.update_dashboard)

module.exports = router;
