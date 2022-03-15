'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment');

const stageModel = require('./stageModel')

const customAlphabet = require('nanoid').customAlphabet
const idGenerator = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 4)

const TripSchema = new mongoose.Schema({
  ticker: {
    type: String,
    unique: true,
    validate: {
        validator: function (v) {
            return /\d{6}-\w{4}/.test(v)
        },
        message: 'Ticker not valid, follow the pattern YYMMDD-XXXX'
    }
  },
  status: {
    type: String,
    enum: ['Created',' Published', 'Cancelled'],
    default: 'Created'
  },
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
    required: true,
    min: 0
  },
  requirements: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  managerId: {
    type: Schema.Types.ObjectId,
    required: 'manager id required'
  },
  applicationCount: {
    type: Number,
    default: 0,
    min: 0
  },
  stages: {
    tpye: [stageModel.schema],
    default: []
  },
  cancellationReason: {
    type: String,
    required: false
  }
}, { strict: false })

TripSchema.index({price: 1, startDate: 1, endDate: 1, ticker: 'text', title: 'text', description: 'text'})
TripSchema.index({managerId: 1})

TripSchema.pre('save', function (callback) {
    const newTrip = this
    const day = moment().format('YYMMDD')
  
    const generatedTicker = [day, idGenerator()].join('-')
    newTrip.ticker = generatedTicker
  
    callback();
})

module.exports = mongoose.model('Trip', TripSchema)
