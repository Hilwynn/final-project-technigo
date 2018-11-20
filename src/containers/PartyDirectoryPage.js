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
              {parties.map(party => (
                <CharacterWidget
                  id={party._id}
                  key={party._id}
                  name={party.name}
                  path="characters/"
                  portrait={party.portrait} />
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
