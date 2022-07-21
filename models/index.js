const mongoose = require('mongoose')
const ridesSchema = require('./Rides')
const foodSchema = require('./Food')

const Rides = mongoose.model('Rides', ridesSchema)
const Food = mongoose.model('Food', foodSchema)

module.exports = {
  Rides,
  Food
}
