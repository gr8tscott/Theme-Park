import {Link} from 'react-router-dom'

import React from 'react'

const Nav = () => {
  return (
    <header>
    <nav className='navBar'>
      < Link to='/'>Home</Link>
      < Link>Tickets</Link>
      < Link>Gift Shop</Link>
      < Link>Food&Drink</Link>
      < Link>RollerCoasters</Link>
    </nav>
    </header> 
  )
}

export default Nav