import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./ProfileMenu.scss"

class ProfileMenu extends Component {
  
  render() {
    
    return (
      <nav className="profile-navbar">
      <ul>
        <li>
          <Link to="/profile">Settings</Link>
        </li>
        <li>
          <Link to="/profile/characters">Characters</Link>
        </li>
        <li>
          <Link to="/profile/characters/create">Create Character</Link>
        </li>
        <li>
          <Link to="/profile/parties/create">Create Party</Link>
        </li>
      </ul>
    </nav>
    )
  }
}

export default ProfileMenu
