import { useEffect, useState } from 'react'

const RideDetails = () => {
  const [RideDetails, setRideDetails] = useState({})

  return (
    <div>
      <div className="rideName">
        <h1>//rideDetails.name</h1>
      </div>
      <section className="rideImage">//rideDetails.image</section>
      <div className="rideDetails">
        <h3> //Description: rideDetails.description//</h3>
      </div>
      <div className="rideSpeed">Speed: rideDetails.speed</div>
      <div className="heightReq">Minimum Height: rideDetails.minHeight</div>
    </div>
  )
}

export default RideDetails
