'use strict'

var router = require('express').Router();

const application = require('../controllers/applicationController')

/**
 * Gets / Deletes an actor
 *  
 * @section applications
 * @type get delete
 * @url /v0/applications/:applicationId
*/
router.route('/applications/:applicationId')
  .get(application.read_application)
  .delete(application.delete_application)

/**
 * Post an application
 *
 * @section applications
 * @type post
 * @url /v0/applications
*/
router.route('/applications')
  .post(application.create_application)

/**
 * Set application status to due
 *
 * @section applications
 * @type put
 * @url /v0/applications/:applicationId/due
*/
router.route('/applications/:applicationId/due')
  .patch(application.due_application)

/**
   *Set application status to accepted
   * 
   * @section applications
   * @type put
   * @url /v0/applications/:applicationId/accept
  */
router.route('/applications/:applicationId/accept')
  .patch(application.accept_application)

/**
  *Set application status to rejected
  * 
  * @section applications
  * @type put
  * @url /v0/applications/:applicationId/reject
 */
router.route('/applications/:applicationId/reject')
  .put(application.reject_application)

/**
   *Cancel an application
   * 
   * @section applications
   * @type put
   * @url /v0/applications/:applicationId/cancel
  */
router.route('/applications/:applicationId/cancel')
  .patch(application.cancel_application)


/**
* List actor applications
* 
* @section myapplications
* @type get
* @url /v0/myapplications/:actorId
* 
*/
router.route('/myapplications/:actorId')
  .get(application.list_actor_applications)

module.exports = router;