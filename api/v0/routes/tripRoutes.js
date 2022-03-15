'use strict'

var router = require('express').Router();

const trips = require('../controllers/tripController')

/**
 * Gets all trips / Create a trip
 *
 * @section trips
 * @type get post
 * @url /v0/trips
*/
router.route('/trips')
  .get(trips.list_all_trips)
  .post(trips.create_trip)

/**
 * Gets / Updates / Deletes a trip
 *
 * @section trips
 * @type get post
 * @url /v0/trips
*/
router.route('/trips/:tripId')
  .get(trips.get_trip)
  .put(trips.update_trip)
  .delete(trips.delete_trip)

module.exports = router;