import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <div className="logo">My Shop</div>
        <nav className="nav">
          <Link to="/menu">Menu Likes</Link>
          <Link to="about">About Us</Link>
          <Link to="contact">Contact</Link>
          <Link to= "queryform">Query Form</Link>
          <Link to= "extra">Extra</Link>
        </nav>
      </header>
  )
}

export default Header