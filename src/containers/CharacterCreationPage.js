import React, { Component } from "react"
import ProfileMenu from "../components/ProfileMenu"

class CharacterCreationPage extends Component {
  state = {
    name: "",
    race: "",
    class: "",
    level: 0,
    background: "",
    alignment: "",
    experience_points: 0,
    gold: 0,
    user: localStorage.getItem("userId")
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const url = "http://localhost:8081/characters"
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        "accessToken": localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .catch(err => {
        console.log("Failed to create user", err)
      })
  }

  render() {
    console.log(this.state)
    const { 
      name,
      race,
      level,
      background,
      alignment,
      experience_points,
      gold
     } = this.state
    
    return (
      <div className="wrapper">
        
        <div className="profile-hero">
          <ProfileMenu />
        </div>
        
        <div className="inner-wrapper">
        
          <h1>Create Character</h1>
          
          <form onSubmit={this.handleSubmit}>

            <div className="input-box">
              <label htmlFor="character-name">Name</label>
              <input
                id="character-name"
                name="name"
                onChange={this.handleChange}
                type="text"
                value={name} />
            </div>
            
            <div className="input-box">
              <label htmlFor="character-race">Race</label>
              <input
                id="character-race"
                name="race"
                onChange={this.handleChange}
                type="text"
                value={race} />
            </div>

            <div className="input-box">
              <label htmlFor="character-class">Class</label>
              <input
                id="character-class"
                name="class"
                onChange={this.handleChange}
                type="text"
                value={this.state.class} />
            </div>
            
            <div className="input-box">
              <label htmlFor="character-level">Level</label>
              <input
                id="character-level"
                name="level"
                onChange={this.handleChange}
                type="text"
                value={level} />
            </div>
            
            <div className="input-box">
              <label htmlFor="character-background">Background</label>
              <input
                id="character-background"
                name="background"
                onChange={this.handleChange}
                type="text"
                value={background} />
            </div>
            
            <div className="input-box">
              <label htmlFor="character-alignment">Alignment</label>
              <input
                id="character-alignment"
                name="alignment"
                onChange={this.handleChange}
                type="text"
                value={alignment} />
            </div>
            
            <div className="input-box">
              <label htmlFor="character-experience_points">Experience Points</label>
              <input
                id="character-experience_points"
                name="experience_points"
                onChange={this.handleChange}
                type="text"
                value={experience_points} />
            </div>
            
            <div className="input-box">
              <label htmlFor="character-gold">Gold</label>
              <input
                id="character-gold"
                name="gold"
                onChange={this.handleChange}
                type="text"
                value={gold} />
            </div>

            <button type="submit">
                Create
            </button>

          </form>
        
        </div>
      </div>
    )
  }
}

export default CharacterCreationPage
