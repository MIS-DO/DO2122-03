'use strict'
const mongoose = require('mongoose')

const ConfigurationSchema = new mongoose.Schema({
  timeCachedFinderResults: {
    type: Number,
    required: true
  },
  maxFinderResults: {
    type: Number,
    required: true
  }
}, { strict: false })

module.exports = mongoose.model('Configuration', ConfigurationSchema)
