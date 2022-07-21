import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Rides from './components/Rides'
import Food from './components/Food'
import GiftShop from './components/GiftShop'
import Tickets from './components/Tickets'
import Nav from './components/Nav'
import Home from './pages/Home'

function App() {
  const [rides, setRides] = useState([
    {
      id: '1',
      description: 'Best Ride Ever',
      img: '',
      name: 'The intimidator',
      speed: '90mph',
      minHeight: '48in'
    },
    {
      id: '2',
      description: 'Worst Ride Ever',
      img: '',
      name: 'The Taco',
      speed: '60mph',
      minHeight: '48in'
    }
  ])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/food" element={<Food />} />
          <Route path="rides" element={<Rides rides={rides} />} />
          <Route path="giftshop" element={<GiftShop />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
