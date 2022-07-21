const mongoose = require('mongoose')
const ridesSchema = require('./Rides')
const foodSchema = require('./Food')

const Product = mongoose.model('Rides', ridesSchema)
const Brand = mongoose.model('Food', foodSchema)

module.exports = {
  Rides,
  Food
}
