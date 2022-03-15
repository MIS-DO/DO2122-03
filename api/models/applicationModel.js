'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApplicationSchema = new mongoose.Schema({
  creationDate: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: String,
    enum: ['Pending', 'Rejected', 'Due', 'Accepted', 'Cancelled'],
    required: true,
    default: 'Pending'
  },
  comments: [String],
  rejectionReason: String,
  explorerId: {
    type: Schema.Types.ObjectId,
    required: 'explorer id required'
  },
  managerId: {
    type: Schema.Types.ObjectId,
    required: 'manager id required'
  },
  tripTitle: {
    type: String,
    required: 'trip title required'
  },
  tripRequeriments: {
    type: [String],
    required: 'trip requirements required'
  }
}, { strict: false })

ApplicationSchema.index({ explorerId: 1, status: 1  })
ApplicationSchema.index({ managerId: 1 })

module.exports = mongoose.model('Application', ApplicationSchema)
