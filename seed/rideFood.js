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
      img: 'https://www.coaster101.com/wp-content/uploads/2020/07/Intimidator026.jpg',
      name: 'The Intimindator',
      speed: '200mph',
      minHeight: '54in'
    },

    {
      id: '2',
      description:
        'https://allears.net/wp-content/uploads/2019/08/Space-Mountain-Halloween-Overlay-5-Mickeys-Not-So-Scary-Halloween-Party-MNSSHP.jpg',
      img: 'blank image',
      name: 'Space Mountain',
      speed: '200mph',
      minHeight: '54in'
    },

    {
      id: '3',
      description: 'Coolest Ride Ever',
      img: 'https://www.orlandofuntickets.com/common_resources/images/oft_blog_doctor_dooms_fearfall_island_of_adventure_universal_orlando.png',
      name: 'The Doomstar',
      speed: '200mph',
      minHeight: '54in'
    },

    {
      id: '4',
      description: 'Coolest Ride Ever',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSex3W-T4zETGvp9L0K0Nl18wBQWFcLOIENYQ&usqp=CAU',
      name: 'Shivering Timbers',
      speed: '200mph',
      minHeight: '54in'
    },

    {
      id: '5',
      description: 'Coolest Ride Ever',
      img: 'https://static.wikia.nocookie.net/sixflags/images/d/db/Titan.jpg/revision/latest/top-crop/width/360/height/360?cb=20180920074847',
      name: 'Titan',
      speed: '200mph',
      minHeight: '54in'
    }
  ]

  const food = [
    {
      location: 'North',
      meals: ['Pizza', 'Calzone', 'Pasta'],
      name: 'Pizza Rat',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyZQ2cvWXwvi4SnERij8aqHq9vQ66M8DAkw&usqp=CAU'
    },

    {
      location: 'South',
      meals: [
        "Dunn's Double Doom Burger",
        'Doom Fries',
        'Hell Nachos',
        'Whiskey Coke'
      ],
      name: 'Doom Burger',
      img: 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_555-menu_all-american-cheeseburger-fries.jpg'
    },

    {
      location: 'East',
      meals: ['Quesadillas', 'Tacos', 'Burritos', 'Chips'],
      name: 'Taco Junky',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDpHgwUA1a4xKWswI7JiDiFmzRBXbSDMu7Q&usqp=CAU'
    },

    {
      location: 'West',
      meals: ['Dippin Dots'],
      name: 'Dippin Dots',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0a_dFAO99recaJNkvnOJigNxgFElGJ85ow&usqp=CAU'
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
