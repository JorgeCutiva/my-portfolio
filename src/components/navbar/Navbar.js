import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeStyle = {
    color: 'red'
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-me"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            AboutMe
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
