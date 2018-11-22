import React, { Component } from "react"
import CharacterWidget from "../components/CharacterWidget"
// import "./PartyPage.scss"

class PartyPage extends Component {
  state = {
    party: null
  }
  
  componentDidMount() {
    const partyId = this.props.match.params.id
    
    fetch(`http://localhost:8081/parties/${partyId}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ party: json })
      })
  }

  render() {
    const { party } = this.state
    
    if (party) {

      return (
        <main className="wrapper">
        
          <div className="party-hero" />
        
          <div className="inner-wrapper">
          
            <h1>{party.name}</h1>
            <div className="party-container">
              {party.members.map(character => (
                <CharacterWidget
                  id={character._id}
                  key={character._id}
                  name={character.name}
                  path="/characters"
                  portrait={character.portrait} />
              ))}
            </div>
        
          </div>
        </main>
      )
    } else {
      return(
        <div>
          Loading...
        </div>
      )
    }
    

  }
}

export default PartyPage
