import React from 'react'

const Food = (props) => {
  return (
    <div className='foodCard'>
        {
          props.food.map((food) => (
            <div className='food-card' key={food.id}>
                  <h3>{food.name}</h3>
                  <img src={food.img}/>
                  <p>{food.location}</p>
                
              {food.meals.map((meal)=> (
                <h4>{meal}</h4>
                ))}
            </div>
          ))
        }
      </div>
    )
  }

export default Food