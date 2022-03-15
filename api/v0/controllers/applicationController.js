'use strict'

const mongoose = require('mongoose')
//const Application = mongoose.model('Application')

exports.read_application = function (req, res) {

  res.send({
    message: 'This is the mockup for read_application'
  })
  /*
    Application.findById(req.params.applicationId, function (err, application) {
      if (err) {
        res.send(err)
      } else {
        res.json(application)
      }
    })*/
  }

//Needed?
exports.update_application = function (req, res) {
  res.send({
    message: 'This is the mockup for update_application'
  })

    /*Application.findById(req.params.applicationId, function (err, application) {
      if (err) {
        res.send(err)
      } else {
        Application.findOneAndUpdate({ _id: req.params.applicationId }, req.body, { new: true }, function (err, application) {
          if (err) {
            res.send(err)
          } else {
            res.json(application)
          }
        })
      }
    })*/
  }

exports.create_application = function (req, res) {
    // Check that user is explorer?
    res.send({
      message: 'This is the mockup for create_application'
    })
    /*
    const newApplication = new Application(req.body)
    newApplication.save(function (error, application) {
      if (error) {
        res.send(error)
      } else {
        res.json(application)
      }
    })*/
  }

  exports.delete_application = function (req, res) {
    res.send({
      message: 'This is the mockup for delete_application'
    })
    /*Application.deleteOne({
      _id: req.params.applicationId
    }, function (err, application) {
      if (err) {
        res.send(err)
      } else {
        res.json({ message: 'Application successfully deleted' })
      }
    })*/

  }

/*STATE TO DUE*/
  exports.due_application = function (req, res) {
    res.send({
      message: 'This is the mockup for due_application'
    })
  }

/*STATE TO ACCEPTED*/
  exports.accept_application = function (req, res) {
    res.send({
      message: 'This is the mockup for accept_application'
    })
  }

/*STATE TO REJECTED AND ADD rejectionReason*/
  exports.reject_application = function (req, res) {
    res.send({
      message: 'This is the mockup for reject_application'
    })
    /*
    Application.findById(req.params.applicationId, function (err, application) {
      if (err) {
        res.send(err)
      } else {
        Application.findOneAndUpdate({ _id: req.params.applicationId }, req.body, { new: true }, function (err, application) {
          if (err) {
            res.send(err)
          } else {
            res.json(application)
          }
        })
      }
    })*/
  }

/*STATE TO CANCELLED*/
  exports.cancel_application = function (req, res) {
    res.send({
      message: 'This is the mockup for cancel_application'
    })
  }

exports.list_actor_applications = function (req, res) {
  res.send({
    message: 'This is the mockup for list_actor_applications'
  })

    /*Application.find({ actorId: req.params.actorId }, function (err, applications) {
    if (err) {
      res.send(err)
    } else {
      res.json(applications)
    }
  })*/

}
