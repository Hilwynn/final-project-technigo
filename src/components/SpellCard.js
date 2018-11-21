import React from "react"
import "./SpellCard.scss"

class SpellCard extends React.Component {
  state = {
    spell: null
  }
  
  componentDidMount() {
    const url = this.props.spellUrl
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          spell: json
        })
      })
      .catch(err => {
        console.log("Failed to find spell", err)
      })
  }

  render() {
    const { spell } = this.state
    const apostropheReplace = /â€™/gi
    console.log(spell)
    
    if (spell) {
      return (
        <div className="spell-card">
          <div className="spell-inner">
            <div className="spell-name"><p>{spell.name}</p></div>
            
            <div className="spell-components">
              <p><span>Components:</span> 
              {spell.components.map(component => {
                const indexOfComponent = spell.components.indexOf(component)
                console.log(indexOfComponent)
                let string = ""
                if (indexOfComponent >= (spell.components.length - 1)) {
                  string = ` ${component}`
                } else {
                  string = ` ${component},`
                }
                return string
              }
              )}
              </p>
            </div>
            <div className="spell-range"><p><span>Range:</span> {spell.range}</p></div>
            <div className="spell-concentration"><p><span>Concentration:</span> {spell.concentration}</p></div>
            <div className="spell-ritual"><p><span>Ritual:</span> {spell.ritual}</p></div>
            <div className="spell-duration"><p><span>Duration:</span> {spell.duration}</p></div>
            <div className="spell-casting-time"><p>{spell.casting_time}</p></div>
            <div className="spell-dynamic">
              {spell.material ? (
                <div className="spell-material"><p>{spell.material}</p></div>
              ) : null }
              <div className="spell-description">
                {spell.desc.map(desc => {
                  const replaced = desc.replace(apostropheReplace, "'")
                  return <p>{replaced}</p>
                }
                )}
              </div>
            </div>
          </div>
          <div className="spell-footer">
            <div className="spell-page"><p>{spell.page}</p></div>
            {spell.level > 0 ? (
              <div className="spell-level-school"><p>Level {spell.level} {spell.school.name}</p></div>
            ) : (
              <div className="spell-level-school"><p>{spell.school.name} Cantrip</p></div>
            )}
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

export default SpellCard
