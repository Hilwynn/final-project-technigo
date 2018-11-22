import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import "./PartyWidget.scss"

class PartyWidget extends Component {    
  render() {
    const width = 100 / this.props.members.length
    
    return (  
      <div className="party-widget-container">  
        <Link to={`${this.props.path}/${this.props.id}`}> 
          <div className="party-widget-inner"> 
            {this.props.members.map(member => (
              <div className="party-widget-portrait" style={{width: `${width}%`}} key={member._id}>
                <img className="party-widget-image" src={member.portrait} />
              </div>
            ))}
            <p className="party-widget-label"><span className="text-padding">{this.props.name}</span></p>
          </div>
        </Link>
      </div>
    )
  }
}

export default withRouter(PartyWidget)
