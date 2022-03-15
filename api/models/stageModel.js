'use strict'
const mongoose = require('mongoose')

const StageSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  }
}, { strict: false })

module.exports = mongoose.model('Stage', StageSchema)
