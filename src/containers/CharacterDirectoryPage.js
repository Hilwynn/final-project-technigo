import React, { Component } from "react"
import CharacterWidget from "../components/CharacterWidget"
import "./CharacterDirectoryPage.scss"

class CharacterDirectoryPage extends Component {
  state = {
    characters: null
  }

  componentDidMount() {
    fetch(`http://localhost:8081/characters`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        characters: json
      })
    })
    .catch(err => {
      console.log("Error from the server!", err)
    })
  }

  render() {
    const { characters } = this.state
    
    if (characters) {
      
      return (
        <div className="wrapper">
        
          <div className="character-hero" />
          
          <div className="inner-wrapper">

            <div className="all-characters-container">
              {characters.map(character => (
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

export default CharacterDirectoryPage
