import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header>
      <div className="menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href="#">img</a>
          <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
