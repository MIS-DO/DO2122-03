'use strict'

const mongoose = require('mongoose')

exports.list_all_actors = function (req, res) {
    res.send({
        message: 'This is the mockup for list_all_actors'
    })
}

exports.create_actor = function (req, res) {
    res.send({
        message: 'This is the mockup for create_actor'
    })
}

exports.read_actor = function (req, res) {
    res.send({
        message: 'This is the mockup for read_actor'
    })
}

exports.update_actor = function (req, res) {
    res.send({
        message: 'This is the mockup for update_actor'
    })
}

exports.delete_actor = function (req, res) {
    res.send({
        message: 'This is the mockup for delete_actor'
    })
}
