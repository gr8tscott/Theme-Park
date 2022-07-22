import {Link} from 'react-router-dom'

import React from 'react'

const Nav = () => {
return (
      <header>
        <nav>
          <Link to=''>Home</Link>
          <Link to='/food'>Food</Link>
          <Link to='/rides'>Roller Coasters</Link>
          <Link to='/reviews'>Reviews</Link>
        </nav>
      </header>
    )

  }


export default Nav 