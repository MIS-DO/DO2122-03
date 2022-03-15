'use strict'

var router = require('express').Router();

const dashboard = require('../controllers/dashboardController')
const configuration = require('../controllers/configurationController')

/**
 * Gets stats info
 *  
 * @section stats info
 * @type get 
 * @url /v1/admin/dashboards
*/
router.route('/admin/dashboards')
  .get(dashboard.get_stats)

/**
 * Updates server configuration
 *  
 * @section configuration
 * @type update
 * @url /v1/admin/configurations
*/
router.route('/admin/configurations/:configurationId')
  .put(configuration.update_configuration)

module.exports = router;
