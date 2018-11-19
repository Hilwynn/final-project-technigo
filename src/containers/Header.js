import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

class Header extends Component {
  
  render() {
    const { authorized, logoutUser } = this.props
    
    return (
      <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/parties">Parties</Link>
        </li>
        {authorized ? (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        ) : (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {authorized ? (
          <li>
            <a
              onClick={logoutUser}
              onKeyPress={logoutUser}
              role="link"
              tabIndex={0}>
                Log Out
            </a>
          </li>
        ) : (
          <li>
            <Link to="/login">Log In</Link>
          </li>
        )}
      </ul>
    </nav>
    )
  }
}

export default Header
