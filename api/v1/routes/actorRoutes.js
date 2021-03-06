'use strict'
module.exports = function (app) {
  const actors = require('../controllers/actorController')

  /**
   * Get an actor who is clerk (any role)
   *    Required role: Administrator
   * Post an actor
   *    RequiredRoles: None
   *    validated if customer and not validated if clerk
   *
   * @section actors
   * @type get post
   * @url /v1/actors
   * @param {string} role (administrator|manager|explorer)
  */
  app.route('/actors')
    .get(actors.list_all_actors)
    .post(actors.create_an_actor)

    /**
   * Put an actor
   *    RequiredRoles: to be the proper actor
   * Get an actor
   *    RequiredRoles: to be the proper actor or an Administrator
   *
   * @section actors
   * @type get put
   * @url /v1/actors/:actorId
  */
  app.route('/actors/:actorId')
    .get(actors.read_an_actor)
    .put(actors.update_an_actor)
    // .delete(actors.delete_an_actor)

  /**
   * Put to Validate a clerk by actorId
   *     RequiredRole: Administrator
   *
   * @section actors
   * @type put
   * @url /v1/actors/:actorId/validate
   * @param {string} actorId
   * */
  app.route('/actors/:actorId/validate')
    .put(actors.validate_an_actor)
}
