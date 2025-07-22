import React from 'react'
import "../css/NaveBare.css"
import { Link } from 'react-router-dom'

const NavBare = () => {
  return (
    <div>
        
      <nav>
        <Link to="/">BOOKE</Link>
        <ul class="list">
          <li>
            <Link to="/">sunup/login</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/add_booke">Add book</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBare