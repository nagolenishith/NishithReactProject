import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <div className="logo">My Shop</div>
        <nav className="nav">
          <Link to="/menu">Menu</Link>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Query Form</a>
        </nav>
      </header>
  )
}

export default Header