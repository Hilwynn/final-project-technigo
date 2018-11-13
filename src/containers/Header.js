import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

class Header extends Component {
  state = {
    authorized: false
  }
  
  logOutUser = () => {
    console.log("Logging out user")
  }
  
  render() {
    const { authorized } = this.state
    
    return (
      <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/character">Character</Link>
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
              onClick={this.logoutUser}
              onKeyPress={this.logoutUser}
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
