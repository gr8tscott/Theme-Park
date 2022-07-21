const mongoose = require('mongoose')
const rideSchema = require('./Ride')
const foodSchema = require('./Food')

const Ride = mongoose.model('Ride', rideSchema)
const Food = mongoose.model('Food', foodSchema)

module.exports = {
  Ride,
  Food
}
