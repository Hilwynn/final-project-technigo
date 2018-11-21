import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import SearchListItem from "../components/SearchListItem"

class JoinPartyForm extends Component {
  state = {
    parties: null,
    party: null,
    partyQuery: "",
  }

  handleSearch = () => {
    const { partyQuery } = this.state
    const url = `http://localhost:8081/parties?name=${partyQuery}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          parties: json
        })
      })
      .catch(err => {
        console.log("Failed to find party", err)
      })
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => this.handleSearch())
  }
  
  handleAddCharacterToParty = (partyUrl, characterId) => {
    fetch(partyUrl, {
      method: "PUT",
      body: JSON.stringify({
        "members": characterId
      }),
      headers: {
        "Content-Type": "application/json",
        "accessToken": localStorage.getItem("token")
      }
    })
    .then(response => response.json())
    .catch(err => {
      console.log("Failed to join party", err)
    })
  }
  
  handleAddPartyToCharacter = (characterUrl, partyId) => {
    fetch(characterUrl, {
      method: "PUT",
      body: JSON.stringify({
        "party": partyId
      }),
      headers: {
        "Content-Type": "application/json",
        "accessToken": localStorage.getItem("token")
      }
    })
    .then(response => response.json())
    .catch(err => {
      console.log("Failed to join party", err)
    })
  }

  handleSubmit = event => {
    
    const characterId = this.props.match.params.id
    const partyId = this.state.party
    const partyUrl = `http://localhost:8081/parties/${partyId}/add`
    const characterUrl = `http://localhost:8081/characters/${characterId}/party`
    
    this.handleAddCharacterToParty(partyUrl, characterId)
    this.handleAddPartyToCharacter(characterUrl, partyId)
  }
  
  handleSearchChoice = (partyName, partyId) => {
    this.setState({
      parties: null,
      party: partyId,
      partyQuery: partyName
    })
  }

  render() {
    const { partyQuery, parties } = this.state
    return (
      <div className="join-party-container">

        <form onSubmit={this.handleSubmit}>

          <div className="input-box">
            <label htmlFor="partyQuery">Choose a party</label>
            <input
              id="partyQuery"
              name="partyQuery"
              onChange={this.handleChange}
              type="text"
              value={partyQuery} />
          </div>
          
          {(parties && partyQuery !== "") && (<ul>
            {parties.map(party => (
              <SearchListItem
                id={party._id}
                key={party._id}
                name={party.name}
                handleSearchChoice={this.handleSearchChoice} />
                  ))}      
          </ul>)}
          
          <button type="submit">
              Join
          </button>

        </form>

      </div>
    )
  }

}

export default withRouter(JoinPartyForm)
