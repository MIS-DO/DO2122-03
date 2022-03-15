'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const ActorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'name is required'
  },
  surname: {
    type: String,
    required: 'surname is required'
  },
  email: {
    type: String,
    required: 'name is required',
    lowercase: true,
    trim: true,
    validate: {
        validator: function (v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
        },
        message: 'Email not valid'
    },
    unique: true
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
    minlength: 9,
    maxlength: 9
  },
  isBanned: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    requred: true,
    minlength: 6
  },
  preferredLanguage:{
    type : String,
    default : "es"
  },
  role: [{
    type: String,
    required: 'role is required',
    enum: ['EXPLORER', 'MANAGER', 'ADMINISTRATOR']
  }],
}, { strict: false })

ActorSchema.pre('save', function (callback) {
  const actor = this
  // Break out if the password hasn't changed
  // if (!actor.isModified('password')) return callback()

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function (err, salt) {
    if (err) return callback(err)

    bcrypt.hash(actor.password, salt, function (err, hash) {
      if (err) return callback(err)
      actor.password = hash
      callback()
    })
  })
})

ActorSchema.pre('findOneAndUpdate', function (callback) {
  const actor = this._update

  bcrypt.genSalt(5, function (err, salt) {
    if (err) return callback(err)

    bcrypt.hash(actor.password, salt, function (err, hash) {
      if (err) return callback(err)
      actor.password = hash
      callback()
    })
  })
})

ActorSchema.methods.verifyPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    // console.log('verifying password in actorModel: ' + password)
    if (err) return cb(err)
    // console.log('iMatch: ' + isMatch)
    cb(null, isMatch)
  })
}

module.exports = mongoose.model('Actor', ActorSchema)