'use strict'

var router = require('express').Router();

const trips = require('../controllers/tripController')

/**
 * Gets all trips / Create a trip
 *
 * @section trips
 * @type get post
 * @url /v1/trips
*/
router.route('/trips')
  .get(trips.list_all_trips)
  .post(trips.create_trip)

/**
 * Gets / Updates / Deletes a trip
 *
 * @section trips
 * @type get post
 * @url /v1/trips
*/
router.route('/trips/:tripId')
  .get(trips.get_trip)
  .put(trips.update_trip)
  .delete(trips.delete_trip)


/**
 * Publishes a trip
 *
 * @section trips
 * @type put
 * @url /v1/trips/:tripId/publish
*/
router.route('/trips/:tripId/publish')
  .patch(trips.publish_trip)

/**
 * Cancels a trip
 *
 * @section trips
 * @type put
 * @url /v1/trips/:tripId/cancel
*/
router.route('/trips/:tripId/cancel')
  .patch(trips.cancel_trip)

module.exports = router;