import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Rides from './components/Rides'
import Food from './components/Food'
import Tickets from './components/Tickets'
import Nav from './components/Nav'
import Home from './pages/Home'
import axios from 'axios'

function App() {
  const [rides, setRides] = useState([])
  const [food, setFood] = useState([])

  const getRides = async () => {
    const res = await axios.get(`http://localhost:3001/ride`)
    setRides(res.data)
  }
  useEffect(() => {
    getRides()
    console.log(getRides)
  }, [])
  const getFood = async () => {
    const res = await axios.get(`http://localhost:3001/food`)
    setFood(res.data)
  }
  useEffect(() => {
    getFood()
    console.log(getFood)
  }, [])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/food" element={<Food food={food} />} />
          <Route path="rides" element={<Rides rides={rides} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
