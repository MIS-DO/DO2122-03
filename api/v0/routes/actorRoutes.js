'use strict'

var router = require('express').Router();

var actors = require('../controllers/actorController')

/**
 * List all actors / Creates an actor
 * @section actors
 * @type get post
 * @url /v0/actors
*/
router.route('/actors')
    .get(actors.list_all_actors)
    .post(actors.create_actor);

/**
 * Gets / Updates / Deletes an actor
 * 
* @section actors
* @type get put delete
* @url /v0/actors/:actorId
*/
router.route('/actors/:actorId')
    .get(actors.read_actor)
    .put(actors.update_actor)
    .delete(actors.delete_actor); 

module.exports = router;