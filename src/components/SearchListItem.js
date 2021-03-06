import React from "react"
import "./SearchListItem.scss"

class SearchListItem extends React.Component {
  state = {
    chosen: false
  }
  
  handleChoice = () => {
    this.setState({
      chosen: !this.state.chosen
    }, () => {
      this.props.handleSearchChoice(this.props.name, this.props.id)
    })
  }

  render() {
    return (
      <li tabIndex={0}>
        <div onClick={this.handleChoice} onKeyPress={this.handleChoice}>
          <p>
            {this.props.name}
          </p>
        </div>
      </li>
    )
  }

}

export default SearchListItem
