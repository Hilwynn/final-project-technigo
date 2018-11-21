import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import SearchListItem from "../components/SearchListItem"

class SpellSearchForms extends Component {
  state = {
    chosenSpell: null,
    searchToggle: "search",
    spellAdd: "",
    spellAddFilter: null,
    spellSearch: "",
    spellSearchFilter: ""
  }
  
  handleSearchToggle = (event) => {
    this.setState({
      searchToggle: event.target.id
    })
  }

  handleAddSpellToCharacter = (characterUrl, chosenSpell) => {
    fetch(characterUrl, {
      method: "PUT",
      body: JSON.stringify({
        "spells": chosenSpell
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
    const { chosenSpell } = this.state
    const characterUrl = `http://localhost:8081/characters/${characterId}/spells`
    
    this.handleAddSpellToCharacter(characterUrl, chosenSpell)
  }
  
  handleSearchChoice = (spellName, spellUrl) => {
    this.setState({
      spellAddFilter: null,
      chosenSpell: spellUrl,
      spellAdd: spellName
    })
  }
  
  // handleSpellSearchChange = event => {
  //   this.setState({
  //     spellSearch: event.target.value
  //   }, this.handleSpellSearchFilter())
  // }
  // 
  // handleSpellSearchFilter = () => {
  //   const spellSearchFilter = this.props.characterSpells.filter(spell => spell.name = this.state.spellSearch)
  //   this.setState({
  //     characterSpells: spellSearchFilter
  //   })
  // }
  
  handleSpellAddChange = event => {
    this.setState({
      spellAdd: event.target.value
    }, this.handleSpellAddSearch())
  }
  
  handleSpellAddSearch = () => {
    const spellAddFilter = this.props.spells.filter(spell => spell.name.includes(this.state.spellAdd))
    this.setState({
      spellAddFilter
    })
  }

  render() {
    const { searchToggle, spellAdd, spellAddFilter, spellSearch, spellSearchFilter } = this.state
    
    return (
      <div className="spells-search-field">
        <div className="spells-search-toggle">

          <div className="spells-toggle-alternative">
            <button onClick={this.handleSearchToggle} onKeyPress={this.handleSearchToggle} id="search">Search</button>
          </div>
          
          <div className="spells-toggle-alternative">
            <button onClick={this.handleSearchToggle} onKeyPress={this.handleSearchToggle} id="add">Add</button>
          </div>
          
        </div>
        
        {searchToggle === "search" && (
            <div>
              <div className="input-box">
                <label htmlFor="spellSearch">Search your spells</label>
                <input
                  id="spell-search"
                  name="spellSearch"
                  onChange={this.handleSpellSearchChange}
                  placeholder="Search your spells"
                  type="text"
                  value={spellSearch} />
               </div>
            
              {spellSearchFilter && (
                <ul>
                  {spellSearchFilter.map(spell => (
                    <SearchListItem
                      id={spell.url}
                      key={spell.url}
                      name={spell.name}
                      handleSearchChoice={this.handleSearchChoice} />
                  ))}      
                </ul>
              )}
            </div>
          )
        }
        
        {searchToggle === "add" &&
        (<form onSubmit={this.handleSubmit}>

          <div className="input-box">
            <label htmlFor="spellAdd">Add a spell</label>
            <input
              id="spell-add"
              name="spellAdd"
              onChange={this.handleSpellAddChange}
              placeholder="Add spell"
              type="text"
              value={spellAdd} />
          </div>
          
          {(spellAddFilter && spellAdd !== "") && (<ul>
            {spellAddFilter.map(spell => (
              <SearchListItem
                id={spell.url}
                key={spell.url}
                name={spell.name}
                handleSearchChoice={this.handleSearchChoice} />
                  ))}      
          </ul>)}
          
          <button type="submit">
              Add
          </button>

        </form>)
        }

      </div>
    )
  }

}

export default withRouter(SpellSearchForms)
