const db = require('../db')
const { Rides, Food } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rides = [
    {
      id: 1,
      description: 'Coolest Ride Ever',
      img: '',
      name: 'The Intimindator',
      speed: '100mph',
      minHeight: '55cm'
    }
  ]

  const food = [
    {
      location: 'North',
      meals: ['Pizza', 'Calzone', 'Pasta'],
      name: 'Pizza Rat'
    }
  ]

  await Rides.insertMany(rides)
  console.log('Created rides!')

  await Food.insertMany(food)
  console.log('Created food!')
}

const run = async () => {
  await main()
  db.close()
}

run()
