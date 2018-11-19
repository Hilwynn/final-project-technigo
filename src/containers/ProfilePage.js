import React, { Component } from "react"
import ProfileMenu from "../components/ProfileMenu"
import "./ProfilePage.scss"

class UserProfile extends Component {
  state = {
    userInfo: null
  }

  componentDidMount() {
    fetch(`http://localhost:8081/users/${localStorage.getItem("userId")}`, {
      headers: { accessToken: localStorage.getItem("token") }
    })
    .then(response => response.json())
    .then(json => {
      console.log("JSON from the server!", json)
      this.setState({
        userInfo: json
      })
    })
    .catch(err => {
      console.log("Error from the server!", err)
    })
  }

  capitalize = inputString => {
    const string = String(inputString)
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    const { userInfo } = this.state
    
    
    if (userInfo) {
      
      const username = this.capitalize(userInfo.username)
      console.log(userInfo.characters[0])
      
      return (
        <div className="wrapper">
          
          <div className="profile-hero">
            <ProfileMenu />
          </div>
          
          <div className="inner-wrapper">
          <h1>Hello, {username}!</h1>
          <p>Your registered e-mail address is: {userInfo.email}.</p>
          </div>
        
        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default UserProfile
