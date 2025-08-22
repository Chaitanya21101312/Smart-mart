import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-section'>
      <nav>

  <Link className ='nav-link'to="/">Home</Link>
<Link  className ='nav-link' to="/product">Product</Link>
<Link className ='nav-link' to="/checkout">Checkout</Link>
<Link  className ='nav-link'to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar

