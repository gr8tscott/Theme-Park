import React from 'react'

const Food = (props) => {
  return (
    <div className='foodCard'>
        {
          props.food.map((food) => (
            <div className='food-card' key={food.id}>
                  <h3>{food.name}</h3>
                  <p>{food.location}</p>
                
              {/* {props.meals.map((meal)=> (
               <h2>{meal}</h2>
              ))} */}
            </div>
          ))
        }
      </div>
    )
  }

export default Food