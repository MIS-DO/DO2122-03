'use strict'

const { Mongoose } = require('mongoose')
const Configuration = require('../../models/configurationModel')

exports.update_configuration = function (req, res) {
  Configuration.findOneAndUpdate({ _id: req.params.configurationId }, req.body, { new: true }, function (err, configuration) {
    if (err) {
      if (err.name === 'ValidationError') {
        res.status(422).send(err)
      } else {
        res.status(500).send(err)
      }
    } else {
      res.json(configuration)
    }
  })
}
