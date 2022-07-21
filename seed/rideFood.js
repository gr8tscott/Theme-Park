const db = require('../db')
const { Ride, Food } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Ride.collection.drop()
  Food.collection.drop()
  const ride = [
    {
      id: '1',
      description: 'Coolest Ride Ever',
      img: 'blank image',
      name: 'The Intimindator',
      speed: '200mph',
      minHeight: '54in'
    },

    {
      id: '2',
      description: 'Coolest Ride Ever',
      img: 'blank image',
      name: 'Space Mountain',
      speed: '200mph',
      minHeight: '54in'
    },

    {
      id: '3',
      description: 'Coolest Ride Ever',
      img: 'blank image',
      name: 'The Doomstar',
      speed: '200mph',
      minHeight: '54in'
    },

    {
      id: '4',
      description: 'Coolest Ride Ever',
      img: 'blank image',
      name: 'Shivering Timbers',
      speed: '200mph',
      minHeight: '54in'
    },

    {
      id: '5',
      description: 'Coolest Ride Ever',
      img: 'blank image',
      name: 'Titan',
      speed: '200mph',
      minHeight: '54in'
    }
  ]

  const food = [
    {
      location: 'North',
      meals: ['Pizza', 'Calzone', 'Pasta'],
      name: 'Pizza Rat'
    },

    {
      location: 'South',
      meals: ["Dunn's Double Doom Burger", 'Doom Fries', 'Hell Nachos'],
      name: 'Doom Burger'
    },

    {
      location: 'East',
      meals: ['Quesadillas', 'Tacos', 'Burritos', 'Chips'],
      name: 'Taco Junky'
    },

    {
      location: 'West',
      meals: ['Dippin Dots'],
      name: 'Dippin Dots'
    }
  ]

  await Ride.insertMany(ride)
  console.log('Created rides!')

  await Food.insertMany(food)
  console.log('Created food!')
}

const run = async () => {
  await main()
  db.close()
}

run()
