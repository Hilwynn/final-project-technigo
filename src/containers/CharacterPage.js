import React, { Component } from "react"
import "./CharacterPage.scss"

class CharacterPage extends Component {
  render() {
    return (
      <main className="wrapper">
        
        <section className="information-section">
          
          <div className="character-image">
            <img src="https://picsum.photos/200" alt="CHARACTER NAME" />
          </div>
          
          <div className="character-basics">
            
            <div className="character-name">
              <div>
                <p>TSERB, KING OF TSERBIA</p>
              </div>
              <div className="character-label">
                <h3>Character Name</h3>
              </div>
            </div>
            
            <div className="character-class">
              <div>
                <p>WARLOCK 13</p>
              </div>
              <div className="character-label">
                <h3>Class & Level</h3>
              </div>
            </div>
            
            <div className="character-background">
              <div>
                <p>ACOLYTE</p>
              </div>
              <div className="character-label">
                <h3>Background</h3>
              </div>
            </div>
            
            <div className="character-race">
              <div>
                <p>KOBOLD</p>
              </div>
              <div className="character-label">
                <h3>Race</h3>
              </div>
            </div>
            
            <div className="character-alignment">
              <div>
                <p>CHAOTIC NEUTRAL</p>
              </div>
              <div className="character-label">
                <h3>Alignment</h3>
              </div>
            </div>
            
            <div className="character-xp">
              <div>
                <p>481 516 XP</p>
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
          </div>
          
          <div className="graph-gold">
            <h2>Gold</h2>
          </div>
          
        </section>
        
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
  }
}

export default CharacterPage
