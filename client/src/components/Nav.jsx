import {Link} from 'react-router-dom'


const Nav = () => {

    return (
      <header>
        <nav>
          <Link to=''>Home</Link>
          <Link to='/tickets'>Tickets</Link>
          <Link to='/food'>Food</Link>
          <Link to='/rides'>Roller Coasters</Link>
          <Link to='/giftshop'>Gift Shop</Link>
        </nav>
      </header>
    )
          
  }


export default Nav