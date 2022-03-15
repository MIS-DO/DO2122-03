'use strict'

var router = require('express').Router();

const application = require('../controllers/applicationController')

/**
 * Gets / Deletes an application
 *  
 * @section applications
 * @type get delete
 * @url /v1/applications/:applicationId
*/
router.route('/applications/:applicationId')
  .get(application.read_application)
  .delete(application.delete_application)

/**
 * Post an application
 *
 * @section applications
 * @type post
 * @url /v1/applications
*/
router.route('/applications')
  .post(application.create_application)

/**
 * Set application status to due
 *
 * @section applications
 * @type put
 * @url /v1/applications/:applicationId/due
*/
router.route('/applications/:applicationId/due')
  .patch(application.due_application)

/**
   *Set application status to accepted
   * 
   * @section applications
   * @type put
   * @url /v1/applications/:applicationId/accept
  */
router.route('/applications/:applicationId/accept')
  .patch(application.accept_application)

/**
  *Set application status to rejected
  * 
  * @section applications
  * @type put
  * @url /v1/applications/:applicationId/reject
 */
router.route('/applications/:applicationId/reject')
  .patch(application.reject_application)

/**
   *Cancel an application
   * 
   * @section applications
   * @type put
   * @url /v1/applications/:applicationId/cancel
  */
router.route('/applications/:applicationId/cancel')
  .patch(application.cancel_application)

/**
* List actor applications
* 
* @section actors
* @type get
* @url /v1/actors/:actorId/applications
* 
*/
router.route('/actors/:actorId/applications')
  .get(application.list_actor_applications)

module.exports = router;