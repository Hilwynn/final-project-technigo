import React, { Component } from "react"
import ProfileMenu from "../components/ProfileMenu"
import CharacterWidget from "../components/CharacterWidget"
import "./UserCharactersPage.scss"

class UserCharactersPage extends Component {
  state = {
    userInfo: null
  }

  componentDidMount() {
    fetch(`http://localhost:8081/users/${localStorage.getItem("userId")}`, {
      headers: { accessToken: localStorage.getItem("token") }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        userInfo: json
      })
    })
    .catch(err => {
      console.log("Error from the server!", err)
    })
  }

  render() {
    const { userInfo } = this.state
    
    if (userInfo) {
      
      return (
        <div className="wrapper">
          
          <div className="profile-hero">
            <ProfileMenu />
          </div>
          
          <div className="inner-wrapper">
            
            <h1>Your Characters</h1>
          
            <div className="user-characters-container">
              {userInfo.characters.map(character => (
                <CharacterWidget
                  id={character._id}
                  key={character._id}
                  name={character.name}
                  path="characters"
                  portrait={character.portrait} />
                    ))}
            </div>
          
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

export default UserCharactersPage
