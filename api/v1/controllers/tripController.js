'use strict'

const Trip = require('../../models/tripModel')

exports.list_all_trips = function (req, res) {
  Trip.find({}, (err, trips) => {
    if (err) {
      res.send(err)
    } else {
      res.json(trips)
    }
  })
}

exports.get_trip = function (req, res) {
  Trip.findById(req.params.tripId, (err, trip) => {
    if (!trip || err) {
      if (err) {
        res.status(400).send({ error: err.message })
      } else if (!trip) {
        res.status(404).send({ error: 'No trip for this id' })
      }
    } else {
      res.json(trip)
    }
  })
}

exports.create_trip = function (req, res) {
  let newTrip = new Trip(req.body)
  newTrip.save((err, trip) => {
    if (err) {
      res.status(400).send({ error: err.message })
    } else {
      res.json(trip)
    }
  })
}

exports.update_trip = function (req, res) {
  Trip.findById(req.params.tripId, (err, trip) => {

    if (!trip || err) {
      if (err) {
        res.status(400).send({ error: err.message })
      } else if (!trip) {
        res.status(404).send({ error: 'No trip for this id' })
      }
    }

    if (req.body.status !== 'Created') {
      res.status(400).send({ error: 'Use specific endpoint to update trip status'})
    }

    if (trip.status === 'Created') {
      if (!trip.stages) trip.stages = []
      trip.price = trip.stages.reduce((sum, elem) => (sum + elem.price), 0)
      trip.save((err, trip) => {     
        if (trip) {
          res.status(200).json(trip)
        }
      })
    } else {
      res.status(405).send({ error: 'You can not update this trip either because its published or cancelled.' })
    }
  })
}

exports.delete_trip = function (req, res) {
  Trip.findById(req.params.tripId, (err, trip) => {

    if (trip.status === 'Published') {
      res.status(403).send('Published trips cannot be deleted')
    } else {
      Trip.findByIdAndRemove(req.params.tripId, (err, trip) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(204).json({ message: 'Trip succesfully deleted' })
        }
      })
    }
  })
}

exports.publish_trip = function (req, res) {
  Trip.findById(req.params.tripId, (err, trip) => {
    if (!trip || err) {
      if (err) {
        res.status(400).send({ error: err.message })
      } else if (!trip) {
        res.status(404).send({ error: 'No trip for this id' })
      }
    } else if (!trip.isPublished) {
      trip.isPublished = true
      res.status(204).json({ message: 'Trip succesfully published' })
    } else {
      res.status(204).json({ message: 'Trip is already published' })
    }
  })
}

exports.cancel_trip = function (req, res) {
  Trip.findById(req.params.tripId, (err, trip) => {
    if (!trip || err) {
      if (err) {
        res.status(400).send({ error: err.message })
      } else if (!trip) {
        res.status(404).send({ error: 'No trip for this id' })
      }
    } else if (!trip.cancellationReason) {
      res.status(400).send({ error: 'No cancellation reason provided' })
    } else if (trip.status === 'Published' && trip.startDate < Date.now() && trip.applicationCount === 0) {
      trip.cancellationReason = req.body.cancellationReason
      res.status(204).json({ message: 'Trip has been cancelled' })
    } else {
      res.status(204).json({ message: 'Trip is not published. It can not be cancelled.' })
    }
  })
}
