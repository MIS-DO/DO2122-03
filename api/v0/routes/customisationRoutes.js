'use strict'

var router = require('express').Router();

const customisation = require('../controllers/customisationController')

/**
  * Get / Updates customisation
  * 
  * @section customisation
  * @type get put
  * @url /v0/customisation
*/
router.route('/customisation')
  .get(customisation.get_customisation)
  .put(customisation.update_customisation)

module.exports = router;