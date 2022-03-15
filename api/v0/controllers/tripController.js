'use strict'

exports.list_all_trips = function (req, res) {
  res.send({
    message: 'This is the mockup for getTrips'
  })
}

exports.get_trip = function (req, res) {
  res.send({
    message: 'This is the mockup for getTrip'
  })
}

exports.create_trip = function (req, res) {
  res.send({
    message: 'This is the mockup for postTrip'
  })
}

exports.update_trip = function (req, res) {
  res.send({
    message: 'This is the mockup for updateTrip'
  })
}

exports.delete_trip = function (req, res) {
  res.send({
    message: 'This is the mockup for deleteTrip'
  })
}
