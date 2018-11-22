import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

class Header extends Component {
  state = {
    hamburgerActive: false
  }

  handleToggleHamburger = () => {
    const currentState = this.state.hamburgerActive
    this.setState({
      hamburgerActive: !currentState
    })
  }
  
  logOutUser = () => {
    this.props.logOutUser()
    this.handleToggleHamburger()
  }
  
  render() {
    const { authorized } = this.props
    const { hamburgerActive } = this.state
    
    return (
      <nav className="navbar">
        <div className={hamburgerActive ? "hamburger-container active" : "hamburger-container"} onClick={this.handleToggleHamburger}>
          <div className="hamburger bar1" />
          <div className="hamburger bar2" />
          <div className="hamburger bar3" />
        </div>
      <ul className={hamburgerActive ? "navigation active" : "navigation"}>
        <li>
          <Link to="/" onClick={this.handleToggleHamburger}>Home</Link>
        </li>
        <li>
          <Link to="/characters" onClick={this.handleToggleHamburger}>Characters</Link>
        </li>
        <li>
          <Link to="/parties" onClick={this.handleToggleHamburger}>Parties</Link>
        </li>
        {authorized ? (
          <li>
            <Link to="/profile" onClick={this.handleToggleHamburger}>Profile</Link>
          </li>
        ) : (
          <li>
            <Link to="/register" onClick={this.handleToggleHamburger}>Register</Link>
          </li>
        )}
        {authorized ? (
          <li>
            <a
              onClick={this.logOutUser}
              onKeyPress={this.logOutUser}
              role="link"
              tabIndex={0}>
                Log Out
            </a>
          </li>
        ) : (
          <li>
            <Link to="/login" onClick={this.handleToggleHamburger}>Log In</Link>
          </li>
        )}
      </ul>
    </nav>
    )
  }
}

export default Header
