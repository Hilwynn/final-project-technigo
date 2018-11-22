import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import SearchListItem from "../components/SearchListItem"

class SpellSearchForms extends Component {
  state = {
    chosenSpell: null,
    focus: false,
    searchToggle: "search",
    spellAdd: "",
    spellAddFilter: null,
    spellSearch: ""
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
  
  handleSpellSearchChange = event => {
    const newState = event.target.value
    this.props.setFilter(newState)
  }
  
  handleSpellAddChange = event => {
    this.setState({
      spellAdd: event.target.value
    }, this.handleSpellAddSearch())
  }
  
  handleSpellAddSearch = () => {
    const regEx = new RegExp(this.state.spellAdd, "gi")
    const spellAddFilter = this.props.spells.filter(spell => spell.name.match(regEx))
    this.setState({
      spellAddFilter
    })
  }

  handleClear = () => {
    this.props.clearSearchField()
    this.setState({
      spellSearchFilter: ""
    })
  }
  
  handleFocus = () => {
    this.setState({
      focus: true
    })
  }
  
  // handleBlur = () => {
  //   this.setState({
  //     focus: false
  //   })
  // }

  render() {
    const { focus, searchToggle, spellAdd, spellAddFilter, spellSearchFilter } = this.state
    
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
            <div className="toggledForm">
              <div className="input-box small-input">
                <label htmlFor="spellSearchFilter" className="hidden">Search your spells</label>
                <input
                  id="spell-search"
                  name="spellSearchFilter"
                  onChange={this.handleSpellSearchChange}
                  placeholder="Search your spells"
                  type="text"
                  value={spellSearchFilter} />
               </div>
               
               <button onClick={this.handleClear} onKeyPress={this.handleClear}>
                   Clear
               </button>

            </div>
          )
        }
        
        {searchToggle === "add" &&
        (<form className="toggledForm" onSubmit={this.handleSubmit}>

          <div className="input-box small-input">
            <label htmlFor="spellAdd" className="hidden">Add a new spell</label>
            <input
              id="spell-add"
              name="spellAdd"
              onChange={this.handleSpellAddChange}
              onFocus={this.handleFocus}
              placeholder="Add a new spell"
              type="text"
              value={spellAdd} />
            
              {(spellAddFilter && (spellAdd !== "" && " ") && focus) && (<ul className="search-result-list">
                {spellAddFilter.slice(0, 5).map(spell => (
                  <SearchListItem
                    id={spell.url}
                    key={spell.url}
                    name={spell.name}
                    handleSearchChoice={this.handleSearchChoice} />
                ))}      
              </ul>)}
          </div>
          
          
          
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
