import React, { Component } from "react"
import "./CharacterPage.scss"

class CharacterPage extends Component {
  state = {
    character: {},
    characterId: "5bebfe603cbb6bb720bac248"
  }
  
  componentDidMount() {
  fetch(`http://localhost:8081/characters/${this.state.characterId}`)
    .then(response => response.json())
    .then(json => {
      this.setState({ character: json })
    })
  }

  render() {
    console.log(this.state.character)
    let { character } = this.state
    
    if (character) {
      console.log(character.party)

      return (
        <main className="wrapper">
          
          <section className="information-section">
            
            <div className="character-image">
              <img src="https://picsum.photos/200" alt={character.name} />
            </div>
            
            <div className="character-basics">
              
              <div className="character-name">
                <div>
                  <p>{character.name}</p>
                </div>
                <div className="character-label">
                  <h3>Character Name</h3>
                </div>
              </div>
              
              <div className="character-class">
                <div>
                  <p>{character.class_level}</p>
                </div>
                <div className="character-label">
                  <h3>Class & Level</h3>
                </div>
              </div>
              
              <div className="character-background">
                <div>
                  <p>{character.background}</p>
                </div>
                <div className="character-label">
                  <h3>Background</h3>
                </div>
              </div>
              
              <div className="character-race">
                <div>
                  <p>{character.race}</p>
                </div>
                <div className="character-label">
                  <h3>Race</h3>
                </div>
              </div>
              
              <div className="character-alignment">
                <div>
                  <p>{character.alignment}</p>
                </div>
                <div className="character-label">
                  <h3>Alignment</h3>
                </div>
              </div>
              
              <div className="character-xp">
                <div>
                  <p>{character.experience_points} XP</p>
                </div>
                <div className="character-label">
                  <h3>Experience Points</h3>
                </div>
              </div>
              
            </div>
            
          </section>
          
          <section className="spells-section">
            <h2>Spells</h2>
            
            <input type="text" placeholder="Search your spells" />
            <input type="text" placeholder="Add spells" />
            
            
          
          </section>
          
          <section className="graphs-section">
          
            <div className="graph-xp">
              <h2>Experience</h2>
              {character.experience_points}
            </div>
            
            <div className="graph-gold">
              <h2>Gold</h2>
              {character.gold}
            </div>
            
          </section>
          
          Add ternery operator - show this section of party is available, otherwise show something like "Join your party"
          
          <section className="party-section">
            <h2>Adventuring Party (components)</h2>
            
            
            <div className="party-container">
              <img src="https://picsum.photos/80" alt="PARTY MEMBER NAME" />
              <img src="https://picsum.photos/80" alt="PARTY MEMBER NAME" />
              <img src="https://picsum.photos/80" alt="PARTY MEMBER NAME" />
              <img src="https://picsum.photos/80" alt="PARTY MEMBER NAME" />
            </div>
            
          </section>
          
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
