import React from 'react'
import "../css/NaveBare.css"
import { Link } from 'react-router-dom'

const NavBare = () => {
  return (
    <div>
        
      <nav>
        <Link className='link' to="/">BOOKE</Link>
        <ul class="list">
          <li>
            <Link className='link' to="/login">sunup/login</Link>
          </li>
          <li>
            <Link  className='link' to="/books">Books</Link>
          </li>
          <li>
            <Link className='link' to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBare