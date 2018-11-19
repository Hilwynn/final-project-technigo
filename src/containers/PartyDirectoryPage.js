import React, { Component } from "react"
import CharacterWidget from "../components/CharacterWidget"

class PartyDirectoryPage extends Component {
  state = {
    parties: null
  }

  componentDidMount() {
    fetch(`http://localhost:8081/parties`)
    .then(response => response.json())
    .then(json => {
      console.log("JSON from the server!", json)
      this.setState({
        parties: json
      })
    })
    .catch(err => {
      console.log("Error from the server!", err)
    })
  }

  render() {
    const { parties } = this.state
    
    if (parties) {
      
      return (
        <div className="wrapper">
        
          <div className="party-hero" />
          
          <div className="inner-wrapper">
          
          <h1>Parties</h1>
          
            <div className="all-characters-container">
              {parties.map(character => (
                <CharacterWidget
                  id={character._id}
                  name={character.name}
                  path="characters/"
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

export default PartyDirectoryPage
