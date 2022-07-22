const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()
//
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
const { Ride, Food } = require('./models')
// const { Rides } = require('./ride')
// const { Food } = require('./ride')

//
app.get('/', (req, res) => {
  res.send('This is root!')
})

// server.js
app.get('/ride', async (req, res) => {
  const ride = await Ride.find({})
  res.json(ride)
})
app.get('/rides/:id', async (req, res) => {
  const { id } = req.params
  const ride = await Ride.find({ id: id })
  res.json(ride)
})

// server.js
app.get('/food', async (req, res) => {
  const food = await Food.find({})
  res.json(food)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
