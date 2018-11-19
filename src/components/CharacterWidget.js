import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./CharacterWidget.scss"

class CharacterWidget extends Component {
  render() {
    return (
      <div className="character-widget-container">
        <Link to={`${this.props.path}/${this.props.id}`}>
          <img
            className="character-widget-image"
            src={this.props.portrait}
            alt={this.props.name}
            title={this.props.name} />
          <p className="character-widget-label text-padding">{this.props.name}</p>
        </Link>
      </div>
    )
  }
}

export default CharacterWidget