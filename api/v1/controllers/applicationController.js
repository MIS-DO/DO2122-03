'use strict'

const Application = require('../../models/applicationModel')

exports.read_application = function (req, res) {
  console.log(Date() + " - GET /application/:applicationId");
    Application.findById(req.params.applicationId, function (err, application) {
      if (err) {
        console.log(Date() + " - " + err);
        res.send(404)
      } else {
        res.json(application)
      }
    })
  }

exports.delete_application = function (req, res) {
    console.log(Date() + " - DELETE /application/:applicationId");
    Application.deleteOne({
      _id: req.params.applicationId
    }, function (err, application) {
      if (err) {
        console.log(Date() + " - " + err);
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
  }

exports.create_application = function (req, res) {
    console.log(Date() + " - POST /applications");
    const newApplication = new Application(req.body)
    newApplication.save(function (err, application) {
      if (err) {
        console.log(Date() + " - " + err);
        if (err.name === 'ValidationError') {
          res.status(422).send(err)
        } else {
          res.sendStatus(500);
        }
      } else {
        res.status(201).json(application);
      }
    })
  }

/*STATUS TO DUE*/
  exports.due_application = function (req, res) {
    console.log(Date() + " - PATCH /application/:applicationId - DUE");
    Application.findById(req.params.applicationId, function (err, application) {
      if (err) {
        res.send(err)
      } else {
        Application.findOneAndUpdate({ _id: req.params.applicationId }, { $set: { status: 'Due' } }, { new: true }, function (err, application) {
          if (err) {
            res.send(err)
          } else {
            res.json(application)
          }
        })
      }
    })
  }

/*STATUS TO ACCEPTED*/
  exports.accept_application = function (req, res) {
    console.log(Date() + " - PATCH /application/:applicationId - ACCEPT");

    //Check that actor is manager and manages this application
    Application.findById(req.params.applicationId, function (err, application) {
      if (err) {
        res.send(err)
      } else {
        Application.findOneAndUpdate({ _id: req.params.applicationId }, { $set: { status: 'Accepted' } }, { new: true }, function (err, application) {
          if (err) {
            res.send(err)
          } else {
            res.json(application)
          }
        })
      }
    })
  }

/*STATUS TO REJECTED AND ADD rejectionReason*/
  exports.reject_application = function (req, res) {
    console.log(Date() + " - PATCH /application/:applicationId - REJECT");

    Application.findById(req.params.applicationId, function (err, application) {
      if (err) {
        res.send(err)
      } else {
        Application.findOneAndUpdate({ _id: req.params.applicationId }, { $set: { status: 'Rejected', rejectionReason: req.body.rejectionReason } }, { new: true }, function (err, application) {
          if (err) {
            res.send(err)
          } else {
            res.json(application)
          }
        })
      }
    })
  }

/*STATUS TO CANCELLED*/
  exports.cancel_application = function (req, res) {
    console.log(Date() + " - PATCH /application/:applicationId - CANCEL");

    Application.findById(req.params.applicationId, function (err, application) {
      if (err) {
        res.send(err)
      } else {
        Application.findOneAndUpdate({ _id: req.params.applicationId }, { $set: { status: 'Cancelled', rejectionReason: req.body.rejectionReason } }, { new: true }, function (err, application) {
          if (err) {
            res.send(err)
          } else {
            res.json(application)
          }
        })
      }
    })
  }

exports.list_actor_applications = function (req, res) {
  console.log(Date() + " - GET /actors/:actorId/applications");
    Application.find({$or:[{'explorerId':req.params.actorId}, {'managerId':req.params.actorId}]}, function (err, applications) {
    if (err) {
      res.send(err)
    } else {
      res.json(applications)
    }
  })
}
