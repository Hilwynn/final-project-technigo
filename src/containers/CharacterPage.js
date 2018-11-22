import React, { Component } from "react"
import CharacterWidget from "../components/CharacterWidget"
import "./UserCharacterPage.scss"
import "./CharacterPage.scss"

class CharacterPage extends Component {
  state = {
    character: null,
    party: null,
    partyId: null
  }
  
  handleCharacterFetch = (characterId) => {
    fetch(`http://localhost:8081/characters/${characterId}`)
      .then(response => response.json())
      .then(json => {
        if (json.party) {
          console.log("Hello from fetch")
          this.setState({
            partyId: json.party._id
          }, () => {
            const { partyId } = this.state
            fetch(`http://localhost:8081/parties/${partyId}`)
              .then(response => response.json())
              .then(json => {
                console.log(json)
                this.setState({
                  party: json
                })
              })
          })
        }
        this.setState({
          character: json
        })
      }) 
  }
  
  componentDidMount() {
    this.handleCharacterFetch(this.props.match.params.id)     
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.handleCharacterFetch(this.props.match.params.id)
    }
  }

  render() {
    const { character, party } = this.state
    
    if (character) {

      return (
        <main className="wrapper">
        
          <div className="character-hero" />
        
          <div className="inner-wrapper">
          
            <section className="information-section">
              
              <div className="character-image">
                <img src={character.portrait} alt={character.name} />
              </div>
              
              <div className="character-basics">
                
                <div className="info-line character-name-public">
                  <div>
                    <p>{character.name}</p>
                  </div>
                  <div className="character-label">
                    <h3>Character Name</h3>
                  </div>
                </div>
                
                <div className="info-line character-user">
                  <div>
                    <p>{character.user.username}</p>
                  </div>
                  <div className="character-label">
                    <h3>Player Name</h3>
                  </div>
                </div>
                
                <div className="info-line character-class">
                  <div>
                    <p>{character.class}, lvl {character.level}</p>
                  </div>
                  <div className="character-label">
                    <h3>Class & Level</h3>
                  </div>
                </div>
                
                <div className="info-line character-background">
                  <div>
                    <p>{character.background}</p>
                  </div>
                  <div className="character-label">
                    <h3>Background</h3>
                  </div>
                </div>
                
                <div className="info-line character-race">
                  <div>
                    <p>{character.race}</p>
                  </div>
                  <div className="character-label">
                    <h3>Race</h3>
                  </div>
                </div>
                
                <div className="info-line character-alignment">
                  <div>
                    <p>{character.alignment}</p>
                  </div>
                  <div className="character-label">
                    <h3>Alignment</h3>
                  </div>
                </div>
                
                <div className="info-line character-xp">
                  <div>
                    <p>{character.experience_points} XP</p>
                  </div>
                  <div className="character-label">
                    <h3>Experience Points</h3>
                  </div>
                </div>
                
              </div>
              
            </section>
            
            <section className="party-section">
              <h2>Adventuring Party</h2>
              
              {party ?
                (
                  <div className="party-wrapper">
                    <h3>{party.name}</h3>
                    <div className="party-container">
                      {party.members.filter(character => character._id !== this.state.character._id).map(character => (
                        <CharacterWidget
                          id={character._id}
                          key={character._id}
                          name={character.name}
                          path="/characters"
                          portrait={character.portrait} />
                      ))}
                    </div>
                  </div>
                )
                : 
                (
                  <div>
                    <p>This character hasn't joined a party yet.</p>
                  </div>
                )
              }
              
            </section>
          
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

export default CharacterPage
