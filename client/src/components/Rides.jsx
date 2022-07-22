import React from 'react'
import { useNavigate } from 'react-router'

const Rides = (props) => {
  let navigate = useNavigate()

    const showRides = (rides) => {
      navigate(`${rides.id}`)
    }

    return (
  <div className='coasterCard'>
      {
        props.rides.map((ride) => (
          <div className='ride-card' onClick={()=> showRides(ride)} key={ride.id}>
                <h3>{ride.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Rides